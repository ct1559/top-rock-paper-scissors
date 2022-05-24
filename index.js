// Create function that makes a play by the computer
function computerPlay() {
  // Create variable for possible computer choices
  let choiceArr = ["Rock", "Paper", "Scissors"];

  // Randomly pick one of the 3 variables
  let npcChoice = Math.floor(Math.random() * 3);
  return choiceArr[npcChoice];
}
