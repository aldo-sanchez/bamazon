console.log('hello world!');
var inquirer = require('inquirer');
var Controller = require('./controller.js');

var myController = new Controller();

myController.displayOptions(promptQuestions)

function promptQuestions(){
  console.log('the promptssss')
  var questions = [{
    type: 'input',
    name: 'id',
    message: 'what would you like to purchase?'
  },{
    type: 'input',
    name: 'quantity',
    message: 'how many would you like to purchase?'
  }];

  inquirer.prompt(questions).then((answer)=>{
    myController.answers = answer;
    myController.analyzeAnswers();
  });
}

