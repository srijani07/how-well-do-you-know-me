var readlineSync = require('readline-sync');
const chalk = require('chalk');


var questionOne = {
  question :  "Is Srijani's favourite show 'The Office'?",
  answer : "Yes"
}

var questionTwo = {
  question : "What is Srijani's most used programming language? ",
  answer : "JavaScript"
}

var questionThree = {
  question : "Where does Srijani live?",
  answer : "Visakhapatnam"
}

var questionFour = {
question : "Which of these apps is Srijani's favourite?",
  answer : "Smallcase"
}

var questionFive = {
question : "How does Srijani feel about putting pineapple on pizza?",
  answer : "Since when did a fruit belong on a pizza?"
}

var score=0;

function checkAnswer(answer, userAnswer) {
  if(answer === userAnswer) {
    console.log(chalk.blue("You are right! "));
    score++;
  }

  else {
    console.log(chalk.red("Sorry, that's incorrect! "));
  }
}

var highscoreOne = {
  name : 'Tara',
  score : 3
}

var highscoreTwo = {
  name : 'Arjun',
  score : 4
}

var highscores = [highscoreOne, highscoreTwo];


var questions = [questionOne, questionTwo, questionThree, questionFour,questionFive];

var userName = readlineSync.question("Hey! What is your name? ");
console.log("Hello, "+userName);

answeroneOptions = ['Yes', 'No'];
indexOne = readlineSync.keyInSelect(answeroneOptions, questions[0].question);
console.log('You answered : ' + answeroneOptions[indexOne]);
checkAnswer(questions[0].answer,answeroneOptions[indexOne]);

answertwoOptions = ['C', 'C++', 'JavaScript', 'Java', 'Python'];
indexTwo = readlineSync.keyInSelect(answertwoOptions, questions[1].question);
console.log('You answered : ' + answertwoOptions[indexTwo]);
checkAnswer(questions[1].answer,answertwoOptions[indexTwo]);

answerthreeOptions = ['Mumbai', 'Bangalore','Pune', 'Visakhapatnam','Gurgaon'];
indexThree = readlineSync.keyInSelect(answerthreeOptions, questions[2].question);
console.log('You answered : ' + answerthreeOptions[indexThree]);
checkAnswer(questions[2].answer,answerthreeOptions[indexThree]);

answerfourOptions = ['Smallcase', 'FamPay','Zerodha','Jar'];
indexFour = readlineSync.keyInSelect(answerfourOptions, questions[3].question);
console.log('You answered : ' + answerfourOptions[indexFour]);
checkAnswer(questions[3].answer,answerfourOptions[indexFour]);


answerfiveOptions = ['Since when did a fruit belong on a pizza?','Vitamin C >>>>', 'Should definitely give it a try?'];
indexFive = readlineSync.keyInSelect(answerfiveOptions, questions[4].question);
console.log('You answered : ' + answerfiveOptions[indexFive]);
checkAnswer(questions[4].answer,answerfiveOptions[indexFour]);


console.log("\n\nYour final score is : "+score);

if ((score>highscoreOne.score) || (score>highscoreTwo.score)) {
  console.log(chalk.green("Congratulations, you beat the high score. Send us a screenshot!"))
}
