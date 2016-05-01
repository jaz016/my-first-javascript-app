var timeLeft = 10000;
var timebarValue = 100;
var clickNumber = 0;
var sec = timeLeft/1000;
var resetTimebar = timebarValue;
var resetTimeLeft = timeLeft;
var resetSec = resetTimeLeft/1000;
var resetClicks = clickNumber;

var start = document.getElementById("start");
var clicksLabel = document.getElementById("clicks");
var timerArea = document.getElementById("timer-area");

function checkPlural(x) {

	if(x===1) {
		return true;
	}

}

function resetGame() {

	start.className = "";
	document.getElementById("btn-message").innerHTML = "Start";
	toggleDetails();

}

function showMessage() {

	if(checkPlural(clickNumber)) {
		alert("Time's up! You've made "+ clickNumber + " click!")
	} else {
		alert("Time's up! You've made "+ clickNumber + " clicks!")
	}

	timebarValue = resetTimebar;
	timeLeft = resetTimeLeft;
	sec = resetSec;
	clickNumber = resetClicks;

	clearInterval(intervalHandle);

	resetGame();

}

function countClicks() {

	clickNumber++;

	if(checkPlural(clickNumber)) {
		clicksLabel.innerHTML = clickNumber + " click!"
	} else {
		clicksLabel.innerHTML = clickNumber + " clicks!"
	}

}

document.getElementById("trigger").onclick = function() {
	countClicks();
};

function toggleDetails() {

	if((clicksLabel.className==="hide") && (timerArea.className==="hide")) {
		clicksLabel.className="";
		timerArea.className="";
	} else {
		clicksLabel.className="hide";
		timerArea.className="hide";
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

start.onclick = function() {

	decreaseTime();
	intervalHandle = setInterval(decreaseTime, 1000);
	toggleDetails();
	setTimeout(showMessage, timeLeft);
	start.className = "hide";
	document.getElementById("btn-message").innerHTML = "Click me fast!";

};

window.onload = function() {

	var btnMessage = document.createElement("p");
	var message = document.createTextNode("Start");
	btnMessage.setAttribute("id", "btn-message");
	btnMessage.appendChild(message);
	document.getElementById("trigger").appendChild(btnMessage);

};


//Changing color effect

document.getElementById("trigger").onmousedown = function() {
	this.setAttribute("style", "background:#0E85BB;");
}

document.getElementById("trigger").onmouseup = function() {
	this.setAttribute("style", "background:#03A9F4;");
}
