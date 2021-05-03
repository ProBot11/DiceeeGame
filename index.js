var num = Math.floor(Math.random()*6 + 1);
var num2 = Math.floor(Math.random()*6 + 1);
document.querySelector(".dice .img1").setAttribute("src", "images/dice" + num + ".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + num2 + ".png");
if(num > num2){
  document.querySelector("h1").textContent = "🚩 Player1 Wins";
} else if(num < num2){
  document.querySelector("h1").textContent = "Player2 Wins 🚩";
} else{
  document.querySelector("h1").textContent = "Draw!";
}
