function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  let choice = prompt('Rock, paper, or scissors?').toLowerCase();
  if (choice == 'rock') return 1;
  if (choice == 'paper') return 2;
  if (choice == 'scissors') return 3;
}

function playRound(humanChoice, computerChoice) {
  // rock 1; paper 2; scissors 3
  // tie 0; human 1; computer 2
  if (humanChoice == computerChoice) return 0;

  if (humanChoice == 1 && computerChoice == 2) return 2;
  if (humanChoice == 2 && computerChoice == 1) return 1;

  if (humanChoice == 1 && computerChoice == 3) return 1;
  if (humanChoice == 3 && computerChoice == 1) return 2;

  if (humanChoice == 2 && computerChoice == 3) return 2;
  if (humanChoice == 3 && computerChoice == 2) return 1;
}

// Main loop
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Five rounds in total
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let roundWinner = playRound(humanChoice, computerChoice);

    // Scoring
    if (roundWinner == 0) console.log('TIE.');
    if (roundWinner == 1) console.log('HUMAN SCORES', ++humanScore);
    if (roundWinner == 2) console.log('COMPUTER SCORES', ++computerScore);
  }

  // Results
  if (humanScore == computerScore) console.log("It's a tie!");
  if (humanScore > computerScore) console.log('Human wins!');
  if (humanScore < computerScore) console.log('Computer wins.');
}

playGame();
