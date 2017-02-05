console.log('hello world!');
var inquirer = require('inquirer');

var promptQuestions = [{
  type: 'input',
  name: 'id',
  message: 'what would you like to purchase?'
},{
  type: 'input',
  name: 'quantity',
  message: 'how many would you like to purchase?'
}]

inquirer.prompt(promptQuestions).then((answer)=>{console.log(answer.id, answer.quantity)});