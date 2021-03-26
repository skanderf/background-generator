var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.getElementById("button");

function setGradient(){
	document.body.style.background = "linear-gradient(to right," + 
	color1.value + ", " + color2.value + ")";
	css.textContent = document.body.style.background;
}
function getRandomColor() {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}
function setRandomColor(){
	
	document.body.style.background = "linear-gradient(to right," + 
	"#" + getRandomColor() + ", " + "#" + getRandomColor() + ")";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);