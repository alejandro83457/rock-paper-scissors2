function getComputerChoice() {
  // Returns the floor of a random int (0-2)+1
  return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice());
