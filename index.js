var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var z= "dice" + randomNumber1 + ".png"

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "dice" + randomNumber1 + ".png"); //setAttribute("src", z)

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.getElementsByClassName("winner")[0].textContent = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.getElementsByClassName("winner")[0].textContent = "Player 2 wins";
} else {
  document.getElementsByClassName("winner")[0].textContent = "It's a tie";
}
