let usersChoice = "";
let computersChoice = 0;

let computerIMG = document.getElementById("computerIMG");
computerIMG.src = "paper.jpg";

let result = document.getElementById("result");
result.innerHTML = "123";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", function () {
  usersChoice = "Камень";
  computersDecision();
  winnerDetermination();
});

paper.addEventListener("click", function () {
  usersChoice = "Бумага";
  computersDecision();
  winnerDetermination();
});

scissors.addEventListener("click", function () {
  usersChoice = "Ножницы";
  computersDecision();
  winnerDetermination();
});

function computersDecision() {
  computersChoice = Math.floor(Math.random() * 3) + 1;
  if (computersChoice == 1) {
    computersChoice = "Камень";
    computerIMG.src = "rock.jpg";
  } else if (computersChoice == 2) {
    computersChoice = "Ножницы";
    computerIMG.src = "scissors.jpg";
  } else if (computersChoice == 3) {
    computersChoice = "Бумага";
    computerIMG.src = "paper.jpg";
  }
}
// let usersChoice = prompt("Введите камень, ножницы или бумага", "Камень");
// alert(computersChoice);

function winnerDetermination() {
  if (usersChoice == computersChoice) {
    result.innerHTML = "TIE";
  }
  if (usersChoice == "Камень" && computersChoice == "Ножницы") {
    result.innerHTML = "WIN";
  }

  if (usersChoice == "Камень" && computersChoice == "Бумага") {
    result.innerHTML = "LOSS";
  }

  if (usersChoice == "Ножницы" && computersChoice == "Бумага") {
    result.innerHTML = "WIN";
  }

  if (usersChoice == "Ножницы" && computersChoice == "Камень") {
    result.innerHTML = "LOSS";
  }

  if (usersChoice == "Бумага" && computersChoice == "Камень") {
    result.innerHTML = "WIN";
  }

  if (usersChoice == "Бумага" && computersChoice == "Ножницы") {
    result.innerHTML = "LOSS";
  }
}
