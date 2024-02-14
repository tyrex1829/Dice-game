var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

var img1 = document.querySelector(".img1");
img1.src = `./images/dice${randomNumber1}.png`;

var img2 = document.querySelector(".img2");
img2.src = `./images/dice${randomNumber2}.png`;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins🚀";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins🔥";
}
else{
    document.querySelector("h1").textContent = "Both wins🤣";
}git 