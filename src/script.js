'use strict';

// DOM References
const againBtn = document.querySelector('.again');
const numberOutput = document.querySelector('.number');
const guessNum = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreOutPut = document.querySelector('.score');
const highscoreOutput = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = function (text) {
  message.textContent = text;
};
const displayNumber = function (num) {
  numberOutput.textContent = num;
};
const displayScore = function (score) {
  scoreOutPut.textContent = score;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(guessNum.value);

  // When no input
  if (!guess) {
    displayMessage('No number!');

    // When guess is right
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    displayNumber(secretNumber);
    document.body.style.backgroundColor = 'green';
    numberOutput.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreOutput.textContent = highscore;
    }

    // When guess is too low or high
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lose the game!');
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  guessNum.value = '';
  document.body.style.backgroundColor = '#222';
  numberOutput.style.width = '15rem';
});
