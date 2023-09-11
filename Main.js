const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter your name:',
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`Hello, ${answers.name}!`);
});