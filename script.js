'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').setAttribute('style', 'background: #222');
  document.querySelector('.number').setAttribute('style', 'width: 15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('input').value);
  //when there is no input
  if (!guess) {
    displayMessage('#️⃣ Please enter a number');
  }
  //when player wins
  else if (guess === number) {
    displayMessage('🎉 correct number');
    document.querySelector('body').setAttribute('style', 'background:#f5cac3');
    document.querySelector('.number').setAttribute('style', 'width: 250px');
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //   WHen the guess is different
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '🤬 too high' : '🤬 too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☠ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when guess is higher than input

//   else if (guess > number) {
// if (score > 1) {
//   displayMessage() = '🤬 too high';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else {
//   document.querySelector('.message').textContent = '☠ You lost the game';
//   document.querySelector('.score').textContent = 0;
// }
//   }
//when guess is lower than input
//   else if (guess < number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '🤬 too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '☠ You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
