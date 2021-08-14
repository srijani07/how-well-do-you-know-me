var readlineSync = require('readline-sync');
const chalk = require('chalk');

var questionOne = {
  question :  "Which way gets more information passed around the office?",
  answer : "Water cooler gossip"
}

var questionTwo = {
  question : "Who is put in charge of the new health care plan?",
  answer : "Dwight"
}

var questionThree = {
  question : "What is Michael's favourite McDonald's sandwich?",
  answer : "Filet O' Fish"
}

var questionFour = {
question : "What is the incentive prize for top sales?",
  answer : "Espresso machine"
}
var questionFive = {
question : "Who wins the basketball game?",
  answer : "Neither team"
}
var questionSix = {
question : "How much money does Michael pledge for the Walk-A-Thon?",
  answer : "$25 a mile"
}
var questionSeven = {
question : "Whose birthday does the office celebrate to distract from the downsizing?",
  answer : "Meredith's"
}
var questionEight = {
question : "What is Pam's favourite flavour of yoghurt?",
  answer : "Mixed berries"
}
var questionNine = {
question : "Where did Michael get his mug from?",
  answer : "Spencer's Gifts"
}

var score=0;

function checkAnswer(answer, userAnswer) {
  if(answer === userAnswer) {
    console.log(chalk.green("You are right! "));
    score++;
  }

  else {
    console.log(chalk.red("Sorry, that's incorrect! \nThe right answer was : "+answer));
  }
}

var highscoreOne = {
  name : 'Tara',
  score : 6
}

var highscoreTwo = {
  name : 'Arjun',
  score : 7
}

var highscores = [highscoreOne, highscoreTwo];


var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine ]

var userName = readlineSync.question("Hey! What is your name? ");
console.log("Hello, "+userName);

answeroneOptions = ["Office memos","Water cooler gossip"];
indexOne = readlineSync.keyInSelect(answeroneOptions, questions[0].question);
console.log('You answered : ' + answeroneOptions[indexOne]);
checkAnswer(questions[0].answer,answeroneOptions[indexOne]);

answertwoOptions = ["Jim","Pam","Dwight","Ryan"];
indexTwo = readlineSync.keyInSelect(answertwoOptions, questions[1].question);
console.log('You answered : ' + answertwoOptions[indexTwo]);
checkAnswer(questions[1].answer,answertwoOptions[indexTwo]);

answerthreeOptions = ["Big Mac","Filet O' Fish", "Tuna Fish"];
indexThree = readlineSync.keyInSelect(answerthreeOptions, questions[2].question);
console.log('You answered : ' + answerthreeOptions[indexThree]);
checkAnswer(questions[2].answer,answerthreeOptions[indexThree]);

answerfourOptions = ["Espresso machine","A parking space", "A refrigerator from Vance Refrigeration"];
indexFour = readlineSync.keyInSelect(answerfourOptions, questions[3].question);
console.log('You answered : ' + answerfourOptions[indexFour]);
checkAnswer(questions[3].answer,answerfourOptions[indexFour]);

answerfiveOptions = ["The Warehouse","The Office","Neither team"];
indexFive = readlineSync.keyInSelect(answerfiveOptions, questions[4].question);
console.log('You answered : ' + answerfiveOptions[indexFive]);
checkAnswer(questions[4].answer,answerfiveOptions[indexFive]);

answersixOptions = ["$2 a mile","$25 a mile","$6 a mile","$10 a mile"];
indexSix = readlineSync.keyInSelect(answersixOptions, questions[5].question);
console.log('You answered : ' + answersixOptions[indexSix]);
checkAnswer(questions[5].answer,answersixOptions[indexSix]);

answersevenOptions = ["Meredith's","Phyllis'","Angela's","Oscar's"];
indexSeven = readlineSync.keyInSelect(answersevenOptions, questions[6].question);
console.log('You answered : ' + answersevenOptions[indexSeven]);
checkAnswer(questions[6].answer,answersevenOptions[indexSeven]);

answereightOptions = ["Mixed berries","Raspberry","Strawberry","None"];
indexEight = readlineSync.keyInSelect(answereightOptions, questions[7].question);
console.log('You answered : ' + answereightOptions[indexEight]);
checkAnswer(questions[7].answer,answereightOptions[indexEight]);

answernineOptions = ["From Dwight","The internet","Spencer's Gifts"];
indexNine = readlineSync.keyInSelect(answernineOptions, questions[8].question);
console.log('You answered : ' + answernineOptions[indexNine]);
checkAnswer(questions[8].answer,answernineOptions[indexNine]);

console.log("\n\nYour final score is : "+score);

if ((score>highscoreOne.score) || (score>highscoreTwo.score)) {
  console.log(chalk.green("Congratulations, you beat the high score. Send us a screenshot!"))
}
