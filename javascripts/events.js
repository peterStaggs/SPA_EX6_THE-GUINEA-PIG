let output = document.getElementById("output-target"); 
let head = document.getElementById("page-header"); 
let inField = document.getElementById("keypress-input"); 
let blue = document.getElementById("add-color");
let pig = document.getElementById("guinea-pig");
let hulk = document.getElementById("make-large");
let capture = document.getElementById("add-border");
let round = document.getElementById("add-rounding");

document.addEventListener("click", clickId); 

function clickId () {
output.innerHTML = "You clicked on the " + event.target.innerHTML + " section.";
}

head.addEventListener('mouseover', function () {
	output.innerHTML = "You moved your mouse over the header";
});

head.addEventListener('mouseout', function () {
	output.innerHTML = "You left me!";
});

inField.addEventListener("input", function () {
	output.innerHTML = inField.value; 
}); 

blue.addEventListener("click", function () {
	pig.classList.toggle("pig");
});

hulk.addEventListener("click", function () {
	pig.classList.toggle("hulk");
});

capture.addEventListener("click", function () {
	pig.classList.toggle("capture");
});

round.addEventListener("click", function () {
	pig.classList.toggle("round");
});


































