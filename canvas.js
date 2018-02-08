var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var start_b = document.getElementById("start");
var stop_b = document.getElementById("stop");
var dvd_b = document.getElementById("dvd");
var shurnk_b = document.getElementById("shurnk");

var shurnko = 0;

var requestID;

var good_circle = 0;

var dvd = 1;

ctx.fillStyle = "blue";

var animate = function() {
  if (dvd) {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var r = 7;
    if (good_circle) { //corners
      var xMag = 3;
      var yMag = 3;
    }
    else {
      var xMag = (Math.random() * 20) - 10;
      var yMag = (Math.random() * 20) - 10;
    }
  }
  else {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var r = 0;
    var thing = 3;
  }
  stopit();

  function circ() {
    clearall();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();
    r += thing;
    requestID = window.requestAnimationFrame(circ);
    //console.log(requestID);
    // console.log(x);
    // console.log(thing);
    if (r >= canvas.width / 2) {
      thing *= -1;
    }
    if (r <= 0) {
      thing *= -1;
    }
  }

  function dvdo() {
    clearall();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();

    x += xMag;
    y += yMag;
    requestID = window.requestAnimationFrame(dvdo);

    // console.log(xMag);
    // console.log(x);

    if(y - r <= 0 || y + r >= canvas.height) {
      yMag *= -1;
    }
    if(x - r <= 0 || x + r >= canvas.width) {
      xMag *= -1;
    }
  }


  if (dvd) {
    dvdo();
  }
  else {
    circ();
  }
}


var stopit = function() {
  window.cancelAnimationFrame(requestID);
}

var dvdanim = function() {
  dvd = 1;
  shrunko = 0;
  animate();
}

var turgle = function() {
  shurnko = 1;
  dvd = 0;
  animate();
}

function clearall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.closePath();
}


window.requestAnimationFrame(animate);

canvas.addEventListener('click', animate);
shurnk_b.addEventListener('click', turgle);
dvd_b.addEventListener('click', dvdanim)
start_b.addEventListener('click', animate);
stop_b.addEventListener('click', stopit);
