function Search(){};

var mysql = require('mysql');
var keyDB = require('./keys.js');

// Setup connection to mysql db (bamazon_db);
var connection = mysql.createConnection(keyDB);

connection.connect((err)=>{
  if(err) throw err;
  // console.log('connected as id: ' + connection.threadId);
});

Search.prototype.getEntireTable = function(callback){
  connection.query('SELECT * FROM ??', array, function(err, res){
    if(err) throw err;
    console.table(res)
    callback();
  });
}

Search.prototype.getItem = function(array, answers, callback){
  console.log(answers)
  connection.query('SELECT * FROM ?? WHERE item_id = ?', array, function(err,res){
    if(err) throw err;
    callback(answers,res);
  });
};

Search.prototype.updateTable = function(array){
  connection.query('UPDATE ?? SET ?? = ? WHERE item_id = ?', array, function(err,res){
    if(err) throw err;
    console.log(res);
  });
};

module.exports = Search;