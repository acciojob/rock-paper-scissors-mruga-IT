//your code here
// Get HTML elements
const gameNumberInput = document.querySelector('#game-number');
const playGameButton = document.querySelector('#play-game');
const userPointsElement = document.querySelector('#user-points');
const computerPointsElement = document.querySelector('#computer-points');
const roundsLeftElement = document.querySelector('#rounds-left');
const rockButton = document.querySelector('[data-ns-test="rock"]');
const paperButton = document.querySelector('[data-ns-test="paper"]');
const scissorsButton = document.querySelector('[data-ns-test="scissors"]');
const computerChooseElement = document.querySelector('#computer-choose');
const roundResultElement = document.querySelector('#round-result');
const gameResultElement = document.querySelector('#game-result');

// Set computer choice mapping
const computerChoice = {
  0: 'ROCK',
  1: 'PAPER',
  2: 'SCISSORS'
}

// Initialize game variables
let userPoints = 0;
let computerPoints = 0;
let roundsLeft = 0;

// Function to start game
function startGame() {
  // Get number of turns
  const numTurns = gameNumberInput.value;
  
  // Validate input
  if (isNaN(numTurns) || numTurns <= 0) {
    alert('Please enter a valid number of turns!');
    return;
  }
  
  // Initialize game variables
  userPoints = 0;
  computerPoints = 0;
  roundsLeft = numTurns;
  
  // Update UI
  userPointsElement.innerText = userPoints;
  computerPointsElement.innerText = computerPoints;
  roundsLeftElement.innerText = roundsLeft;
  gameResultElement.innerText = '';
  roundResultElement.innerText = '';
  computerChooseElement.innerText = '';
}

// Function to play round
function playRound(userChoice) {
  // Generate computer choice
  const computerChoiceNum = Math.floor(Math.random() * 3);
  const computerChoiceText = computerChoice[computerChoiceNum];
  
  // Calculate round result
  let roundResult;
  if (userChoice ===
