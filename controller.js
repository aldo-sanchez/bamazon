// var mysql = require('mysql');
require('console.table')
// var keyDB = require('./keys.js');

var Search = require('./queryDB');
var newSearch = new Search(); 

// var questions = require('./bamazonCustomer.js')

// // Setup connection to mysql db (bamazon_db);
// var connection = mysql.createConnection(keyDB);

// connection.connect((err)=>{
//   if(err) throw err;
//   // console.log('connected as id: ' + connection.threadId);
// });

function ControllerObject(answers){
  this.answers = answers
};

ControllerObject.prototype.analyzeAnswers = function(){
  array = ['products', this.answers.id];
  newSearch.getItem(array, this.answers, reduceQuantity);
};

ControllerObject.prototype.displayOptions = function(promptQuestions){
  console.log('im in for realz')
  array = ['products'];
  newSearch.getEntireTable(promptQuestions);
}

module.exports = ControllerObject;

// function getEntireTable(callback){
//   connection.query('SELECT * FROM ??', array, function(err, res){
//     if(err) throw err;
//     console.table(res)
//     callback();
//   });
// }

// function getItem(array, answers, callback){
//   console.log(answers)
//   connection.query('SELECT * FROM ?? WHERE item_id = ?', array, function(err,res){
//     if(err) throw err;
//     callback(answers,res);
//   });
// };

// function updateTable(array){
//   connection.query('UPDATE ?? SET ?? = ? WHERE item_id = ?', array, function(err,res){
//     if(err) throw err;
//     console.log(res);
//   });
// };

function reduceQuantity(answers, res){
    console.table(res);
    stockQuantity = res[0].stock_quantity;
    if(stockQuantity > answers.quantity){
      stockQuantity -= answers.quantity;
      array = ['products', 'stock_quantity', stockQuantity, res[0].item_id];
      newSearch.updateTable(array);
      var totalCost = res[0].price * answers.quantity;
      console.log('you owe: $' + totalCost);
    }
    else{console.log('Not enough in stock, we only have ' + res[0].stock_quantity)}
};