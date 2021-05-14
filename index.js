var rocket = {
  bottom: 10,
  left: 0
};

var missiles = [];

var followCursor = (

  function() {
    var s = document.getElementById('rocket');
    // Container and displays
    const container = document.querySelector(".gameWindow");

    return {
      init: function() {
        document.body.appendChild(s);
      },
      run: function(e) {
        // On mousemove
        container.addEventListener("mousemove", (e) => {
          // Do math
          xPercent = parseInt(e.pageX / window.innerWidth * 100);
          s.style.left = (xPercent) + '%';
        });
      }
    };
  }());

window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}

document.onkeydown = function(e) {
  if (e.keyCode === 32) {
    var getRocket = document.getElementById('rocket');
    var leftValue = getRocket.style.left;
    missiles.push({
      left: parseInt(leftValue, 10) - 18,
      bottom: rocket.bottom
    });
    drawMissiles()
    console.log(missiles)
  }
};

function drawMissiles() {
  document.getElementById('missiles').innerHTML = "";
  for (var missile = 0; missile < missiles.length; missile = missile + 1) {
    document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}%; bottom:${missiles[missile].bottom}px;'></div>`;
  }
};

function moveMissiles() {
  for (var missile = 0; missile < missiles.length; missile = missile + 1) {

    if (Math.abs(missiles[missile].bottom) <= 1100) {
      missiles[missile].bottom = missiles[missile].bottom + 20;
    } else {
      missiles[missile].bottom = 1150;

    }
  }
};

function gameLoop() {
  setTimeout(gameLoop, 50),
    moveMissiles();
  drawMissiles();
};

gameLoop();


//ENEMIES
//enemy 1
var theEnemy1 = document.getElementById('enemies1');
var currentLeftPos1 = 27;
var currentTopPos1 = 55;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveEnemy1() {
  currentLeftPos1 += .04;
  theEnemy1.style.left = currentLeftPos1 + "%";
  if (Math.abs(currentLeftPos1) >= 37) {
    currentLeftPos1 = 27;

  }
  currentTopPos1 += .04;
  theEnemy1.style.top = currentTopPos1 + "%";
  if (Math.abs(currentTopPos1) >= 65) {

    currentTopPos1 = 55;
  }
  requestAnimationFrame(moveEnemy1);

};

moveEnemy1();
//moveSpeech1
var speechBubble1 = document.getElementById('speech1');
var currentLeftPosSpeech1 = 28;
var currentTopPosSpeech1 = 53;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech1() {
  currentLeftPosSpeech1 += .04;
  speechBubble1.style.left = currentLeftPosSpeech1 + "%";
  if (Math.abs(currentLeftPosSpeech1) >= 38) {
    currentLeftPosSpeech1 = 28;

  }
  currentTopPosSpeech1 += .04;
  speechBubble1.style.top = currentTopPosSpeech1 + "%";
  if (Math.abs(currentTopPosSpeech1) >= 63) {

    currentTopPosSpeech1 = 53;
  }
  requestAnimationFrame(moveSpeech1);

};
moveSpeech1();

//enemy2

var theEnemy2 = document.getElementById('enemies2');
var currentLeftPos2 = 15;
var currentTopPos2 = 15;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveEnemy2() {
  currentLeftPos2 += .04;
  theEnemy2.style.left = currentLeftPos2 + "%";
  if (Math.abs(currentLeftPos2) >= 37) {
    currentLeftPos2 = 15;
  }
  // currentTopPos2 += .04;
  // theEnemy2.style.top = currentTopPos2 + "%";
  // if (Math.abs(currentTopPos2) >= 65) {
  //
  //   currentTopPos2 = 55;
  // }
  requestAnimationFrame(moveEnemy2);

};

moveEnemy2();

//speech2
var speechBubble2 = document.getElementById('speech2');
var currentLeftPosSpeech2 = 14;
var currentTopPosSpeech2 = 15;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech2() {
  currentLeftPosSpeech2 += .04;
  speechBubble2.style.left = currentLeftPosSpeech2 + "%";
  if (Math.abs(currentLeftPosSpeech2) >= 36) {
    currentLeftPosSpeech2 = 14;

  }
  // currentTopPosSpeech2 += .04;
  // speechBubble2.style.top = currentTopPosSpeech2 + "%";
  // if (Math.abs(currentTopPosSpeech2) >= 63) {
  //
  //   currentTopPosSpeech2 = 53;
  // }
  requestAnimationFrame(moveSpeech2);

};
moveSpeech2();

//enemy3

var theEnemy3 = document.getElementById('enemies3');
var currentLeftPos3 = 80;
var currentTopPos3 = 15;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveEnemy3() {
  currentLeftPos3 -= .04;
  theEnemy3.style.left = currentLeftPos3 + "%";
  if (Math.abs(currentLeftPos3) <= 54) {
    currentLeftPos3 = 80;
  };
  currentTopPos3 += .04;
  theEnemy3.style.top = currentTopPos3 + "%";
  if (Math.abs(currentTopPos3) <= 55) {

    currentTopPos3 = 15;
  }
  requestAnimationFrame(moveEnemy3);

};

moveEnemy3();

//speech3
var speechBubble3 = document.getElementById('speech3');
var currentLeftPosSpeech3 = 81;
var currentTopPosSpeech3 = 15;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech3() {
  currentLeftPosSpeech3 -= .04;
  speechBubble3.style.left = currentLeftPosSpeech3 + "%";
  if (Math.abs(currentLeftPosSpeech3) <= 55) {
    currentLeftPosSpeech3 = 81;

  }
  currentTopPosSpeech3 += .04;
  speechBubble3.style.top = currentTopPosSpeech3 + "%";
  if (Math.abs(currentTopPosSpeech3) <= 63) {

    currentTopPosSpeech3 = 15;
  }
  requestAnimationFrame(moveSpeech3);

};
moveSpeech3();

//enemy4

var theEnemy4 = document.getElementById('enemies4');
var currentLeftPos4 = 80;
var currentTopPos4 = 75;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveEnemy4() {
  currentLeftPos4 -= .04;
  theEnemy4.style.left = currentLeftPos4 + "%";
  if (Math.abs(currentLeftPos4) <= 65) {
    currentLeftPos4 = 80;
  };
  currentTopPos4 -= .04;
  theEnemy4.style.top = currentTopPos4 + "%";
  if (Math.abs(currentTopPos4) <= 55) {

    currentTopPos4 = 75;
  }
  requestAnimationFrame(moveEnemy4);

};

moveEnemy4();

//speech4
var speechBubble4 = document.getElementById('speech4');
var currentLeftPosSpeech4 = 79;
var currentTopPosSpeech4 = 74;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech4() {
  currentLeftPosSpeech4 -= .04;
  speechBubble4.style.left = currentLeftPosSpeech4 + "%";
  if (Math.abs(currentLeftPosSpeech4) <= 64) {
    currentLeftPosSpeech4 = 79;

  }
  currentTopPosSpeech4 -= .04;
  speechBubble4.style.top = currentTopPosSpeech4 + "%";
  if (Math.abs(currentTopPosSpeech4) <= 54) {

    currentTopPosSpeech4 = 74;
  }
  requestAnimationFrame(moveSpeech4);

};
moveSpeech4();
