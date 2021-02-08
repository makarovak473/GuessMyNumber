"use strinct";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore=0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆CORRECT NUMBER!🏆";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 📈";
      score--;
      document.querySelector(".score").textContent = score;
      
    } else {
      document.querySelector(".message").textContent = "You Lose🎇";
      document.querySelector(".score").textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose🎇";
      document.querySelector(".score").textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener("click", function(){
 secretNumber = Math.trunc(Math.random() * 20) + 1;
 score=20;
 document.querySelector('.message').textContent='Start guessing...';
 document.querySelector('.number').textContent='?';
 document.querySelector(".score").textContent = score;
 document.querySelector('body').style.backgroundColor='#222';
 document.querySelector('.number').style.width="15rem";
 document.querySelector('.guess').value='';
});
