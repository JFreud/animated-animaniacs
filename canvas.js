var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var start_b = document.getElementById("start");
var stop_b = document.getElementById("stop");

var requestID;

var animate = function() {
    stopit();
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var r = 0;
    var thing = 3;

    function circ() {
	clearall();
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fill()
	ctx.stroke();
	r += thing;
	requestID = window.requestAnimationFrame(circ);
	//console.log(requestID);
	console.log(x);
	console.log(thing);
	if (r >= canvas.width / 2) {
	    thing *= -1;
	}
	if (r <= 0) {
	    thing *= -1;
	}
    }
    circ();
}

var stopit = function() {
    window.cancelAnimationFrame(requestID);
}

function clearall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}


window.requestAnimationFrame(animate);

canvas.addEventListener('click', animate);
start_b.addEventListener('click', animate);
stop_b.addEventListener('click', stopit);
