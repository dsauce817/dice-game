var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImag = "./images/" + "dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImag)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImag2 = "./images/" + "dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImag2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}