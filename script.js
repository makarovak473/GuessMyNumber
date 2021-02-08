"use strinct";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const setBackGroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const numberStyle = function (style) {
  document.querySelector(".number").style.width = style;
};
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage("No Number!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🏆CORRECT NUMBER!🏆");
    setBackGroundColor("#60b347");
    numberStyle("30rem");
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High 📈" : "Too Low 📉");
      score--;
      setScore(score);
    } else {
      displayMessage("You Lose🎇");
      setScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  displayNumber("?");
  setScore(score);
  setBackGroundColor("#222");
  numberStyle("15rem");
  document.querySelector(".guess").value = "";
});
