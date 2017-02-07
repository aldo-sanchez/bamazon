require('console.table')

var Search = require('./queryDB');
var newSearch = new Search(); 

function ControllerObject(answers){
  this.answers = answers
};

ControllerObject.prototype.analyzeAnswers = function(){
  array = ['products', this.answers.id];
  newSearch.getItem(array, this.answers, reduceQuantity);
};

ControllerObject.prototype.displayOptions = function(promptQuestions){
  array = ['products'];
  newSearch.getEntireTable(promptQuestions);
}

module.exports = ControllerObject;

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