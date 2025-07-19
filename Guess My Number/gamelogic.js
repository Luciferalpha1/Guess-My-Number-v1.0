"use strict";
console.log("✅ JavaScript file is loaded!");

const resetGame = function () {
  //making a function for DRY
  secretNumber = generateSecretNumber(maxNumber); //make a new secret number.
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score; //change value using DOM
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = ""; //making input box empty

  document.querySelector("body").style.backgroundColor = "#222"; //changing the background again.
  document.querySelector(".number").style.width = "15rem";
};

// SECRET NUMBER LOGIC
const generateSecretNumber = function (max) {
  return Math.trunc(Math.random() * max) + 1; //math random for 0 to 1(includes all decimal points), math.trunc for removing it.
};

// CHANGING TEXT IN DOM
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// implement maxNumber logic for level dropdown.

let maxNumber = 20; //for dropdown, maxNumber will be by deafult 20 only.
let secretNumber = generateSecretNumber(maxNumber);
let score = 20;
let highscore = 0;

// REAL COMPARISON LOGIC
document.querySelector(".check").addEventListener("click", function () {
  const numberGiven = Number(document.querySelector(".guess").value); // value given by user.
  console.log(numberGiven); // for log purpose

  // When no input by user:
  if (!numberGiven) {
    // !numberGiven is basically a Zero, which is a falsy value.
    displayMessage("Enter a Number First!");

    // When user guesses correctly:
  } else if (numberGiven === secretNumber) {
    displayMessage("Perfect Guess! Congrats");
    document.querySelector(".number").textContent = secretNumber; //changing the "?" to secretNumber

    //add changes to UI here:
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When user guesses incorrectly:
  } else if (numberGiven !== secretNumber) {
    if (score > 1) {
      displayMessage(numberGiven > secretNumber ? "Too High" : "Too Low"); //Implement a better logic for too high/too low and close/closer.
      score--; // you have 20 guesses hence.
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the Game!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Logic for Again Button
document.querySelector(".reset").addEventListener("click", function () {
  score = 20; //change score to 20 again
  resetGame();
});
