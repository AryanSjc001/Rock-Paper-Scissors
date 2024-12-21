// script.js
function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display emojis for choices
  document.getElementById('player-choice').textContent = emojis[playerChoice];
  document.getElementById('computer-choice').textContent = emojis[computerChoice];

  // Determine the winner
  const resultMessage = determineWinner(playerChoice, computerChoice);

  // Display result and message
  document.getElementById('message').textContent = `You chose ${playerChoice}, computer chose ${computerChoice}.`;
  document.getElementById('result').textContent = resultMessage;

  // Change background color based on the result
  changeBackgroundColor(resultMessage);
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  }

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You win! 🎉";
  } else {
    return "You lose! 😢";
  }
}

function changeBackgroundColor(resultMessage) {
  const body = document.body;
  if (resultMessage === "You win! 🎉") {
    body.style.background = "linear-gradient(135deg, #6BFF8C, #66D4A2)";  // Greenish for win
  } else if (resultMessage === "You lose! 😢") {
    body.style.background = "linear-gradient(135deg, #FF6F61, #FF4A55)";  // Redish for lose
  } else {
    body.style.background = "linear-gradient(135deg, #FF9A9E, #FAD0C4)";  // Default light background for draw
  }
}
