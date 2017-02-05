var mysql = require('mysql');
var keyDB = require('./keys.js');
var questions = require('./bamazonCustomer.js')

var connection = mysql.createConnection(keyDB);

connection.connect((err)=>{
  if(err) throw err;
  // console.log('connected as id: ' + connection.threadId);
});

function ControlerObject(answers){
  this.answers = answers
};

ControlerObject.prototype.test = function(){
  if(this.answers.id == 10){
    console.log('awesome!!!');
  }else{console.log('baaaaaaaaaaaaad')};
};

module.exports = ControlerObject;