var timeLeft = 10000;
var timebarValue = 100;
var clickNumber = 0;
var sec = timeLeft/1000;
var resetTimebar = timebarValue;
var resetTimeLeft = timeLeft;
var resetSec = resetTimeLeft/1000;
var resetClicks = clickNumber;


function resetGame() {
	document.getElementById("start").setAttribute("style", "display:block;");
	document.getElementById("btn-message").innerHTML = "Start";
}

function showMessage() {

	if(clickNumber==1) {
		alert("Time's up! You've made "+ clickNumber + " click!");
	} else {
		alert("Time's up! You've made "+ clickNumber + " clicks!");
	}

	timebarValue = resetTimebar;
	timeLeft = resetTimeLeft;
	sec = resetSec;
	clickNumber = resetClicks;

	clearInterval(decreaseTimeHandle);

	document.getElementById("timebar").style.width = timebarValue + "%";
	document.getElementById("timer").innerHTML = sec + " seconds left";

	if(clickNumber===1) {
		document.getElementById("clicks").innerHTML = clickNumber + " click!"
	} else {
		document.getElementById("clicks").innerHTML = clickNumber + " clicks!"
	}

	resetGame();

}

function countClicks() {
	clickNumber++;
	if(clickNumber===1) {
		document.getElementById("clicks").innerHTML = clickNumber + " click!"
	} else {
		document.getElementById("clicks").innerHTML = clickNumber + " clicks!"
	}
}


function decreaseTime() {
	document.getElementById("timebar").style.width = timebarValue + "%";
	timebarValue-=(timeLeft/(timeLeft/100))/(timeLeft/1000);
	if(sec===1) {
		document.getElementById("timer").innerHTML = sec + " second left";
	} else {
		document.getElementById("timer").innerHTML = sec + " seconds left";
	}
	sec--;
}


function showDetails() {
	document.getElementById("clicks").style.display = "block";
	document.getElementById("timer-area").style.display = "block";
}


document.getElementById("trigger").onclick = function() {
	countClicks();
};

document.getElementById("trigger").onmousedown = function() {
	this.setAttribute("style", "background:#0E85BB;");
}

document.getElementById("trigger").onmouseup = function() {
	this.setAttribute("style", "background:#03A9F4;");
}

document.getElementById("start").onclick = function() {
	decreaseTime();
	decreaseTimeHandle = setInterval(decreaseTime, 1000);
	showDetails();
	setTimeout(showMessage, timeLeft);
	document.getElementById("start").setAttribute("style", "display:none;");
	document.getElementById("btn-message").innerHTML = "Click me fast!";
};

window.onload = function() {
	var btnMessage = document.createElement("p");
	var message = document.createTextNode("Start");
	btnMessage.setAttribute("id", "btn-message");
	btnMessage.appendChild(message);
	document.getElementById("trigger").appendChild(btnMessage);
};
