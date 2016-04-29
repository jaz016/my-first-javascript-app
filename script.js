var clickNumber = 0;
var timebarValue = 100;
var timeLeft = 10000;
var sec = timeLeft/1000;
var resetTimebar = timebarValue;
var resetTimeLeft = timeLeft;
var resetSec = resetTimeLeft/1000;
var resetClicks = clickNumber;

function popup() {
	var timebarValue = resetTimebar;
	var timeLeft = resetTimeLeft;
	var sec = resetSec;
	if(clickNumber==1) {
		alert("Time's up! You've made "+ clickNumber + " click!");
	} else {
		alert("Time's up! You've made "+ clickNumber + " clicks!");
	}

	clickNumber = resetClicks;

	clearInterval(countdownHandle);
	document.getElementById("timebar").style.width = timebarValue + "%";
	document.getElementById("timer").innerHTML = sec + " seconds left";
	if(clickNumber==1) {
		document.getElementById("clicks").innerHTML = clickNumber + " click!"
	} else {
		document.getElementById("clicks").innerHTML = clickNumber + " clicks!"
	}

	document.getElementById("trigger").innerHTML = "<div id=\"start\"></div>Start";

}

function countClicks() {
	clickNumber++;
	if(clickNumber==1) {
		document.getElementById("clicks").innerHTML = clickNumber + " click!"
	} else {
		document.getElementById("clicks").innerHTML = clickNumber + " clicks!"
	}
}

function showDetails() {

	document.getElementById("clicks").style.display = "block";
	document.getElementById("timer-area").style.display = "block";
}

function countdown() {
	document.getElementById("timebar").style.width = timebarValue + "%";
	timebarValue=timebarValue-(timeLeft/(timeLeft/100))/(timeLeft/1000);
	document.getElementById("timer").innerHTML = sec + " seconds left";
	sec--;
}

document.getElementById("trigger").onclick = function() {
	countClicks();
};

document.getElementById("start").onclick = function() {
	countdown();
	countdownHandle = setInterval(countdown, 1000);
	showDetails();
	setTimeout(popup, timeLeft);
	document.getElementById("trigger").innerHTML = "Click me fast!";
};