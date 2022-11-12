//Dice game


//die player 1 random num selector
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg1 = "images/dice"+ randomNumber1 +".png";
//die player 2 random num selector
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "images/dice"+ randomNumber2 +".png";

//random engine for the dice
const changeDiceLeft = document.querySelectorAll("img")[0];
const changeDiceRight = document.querySelectorAll("img")[1];

//change dice on refresh
changeDiceLeft.setAttribute("src", (randomDiceImg1));
changeDiceRight.setAttribute("src", (randomDiceImg2));

//show the Winner

const showWinner = document.querySelector("h1");

if(randomNumber1 === randomNumber2){
  showWinner.innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2){
  showWinner.innerHTML = "🚩Player 1 Wins!";
}
else{
  showWinner.innerHTML = "Player 2 Wins!🚩";
}
