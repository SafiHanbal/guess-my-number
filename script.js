'use strict';

const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const messageText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const againButton = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

const displayMessage = message => {
  messageText.textContent = message;
};

checkButton.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    number.textContent = secretNumber;
    number.style.width = '30rem';
    body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscoreText.textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreText.textContent = '0';
      body.style.backgroundColor = '#ff866c';
      number.textContent = '💥';
    }
  }
});

againButton.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);

  displayMessage('Start guessing...');
  scoreText.textContent = score;
  number.textContent = '?';
  guessInput.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
