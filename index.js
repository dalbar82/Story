

//SPACE INVADERS GAME
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
    document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}%; bottom:${missiles[missile].bottom}%;'></div>`;
  }
};

function moveMissiles() {
  for (var missile = 0; missile < missiles.length; missile = missile + 1) {

    if (Math.abs(missiles[missile].bottom) <= 100) {
      missiles[missile].bottom = missiles[missile].bottom + 5;
    } else {
      missiles[missile].bottom = 110;

    }
  }
};

function rotationCalculator() {
  theEnemy2.style.transform = theEnemy2.style.transform + 5 + "deg";
};


//ENEMIES
//enemy 1
var theEnemy1 = document.getElementById('enemies1');
var currentLeftPos1 = 27;
var currentBottomPos1 = 45;

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
  currentBottomPos1 += .04;
  theEnemy1.style.bottom = currentBottomPos1 + "%";
  if (Math.abs(currentBottomPos1) >= 55) {

    currentBottomPos1 = 45;
  }
  requestAnimationFrame(moveEnemy1);

};

moveEnemy1();
//moveSpeech1
var speechBubble1 = document.getElementById('speech1');
var currentLeftPosSpeech1 = 29;
var currentBottomPosSpeech1 = 46;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech1() {
  currentLeftPosSpeech1 += .04;
  speechBubble1.style.left = currentLeftPosSpeech1 + "%";
  if (Math.abs(currentLeftPosSpeech1) >= 39) {
    currentLeftPosSpeech1 = 29;

  }
  currentBottomPosSpeech1 += .04;
  speechBubble1.style.bottom = currentBottomPosSpeech1 + "%";
  if (Math.abs(currentBottomPosSpeech1) >= 56) {

    currentBottomPosSpeech1 = 46;
  }
  requestAnimationFrame(moveSpeech1);

};
moveSpeech1();

//enemy2

var theEnemy2 = document.getElementById('enemies2');
var currentLeftPos2 = 15;
var currentBottomPos2 = 85;
var currentRotation = "0deg";

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
  theEnemy2.style.bottom = currentBottomPos2 + "%";

  requestAnimationFrame(moveEnemy2);

};

moveEnemy2();

//speech2
var speechBubble2 = document.getElementById('speech2');
var currentLeftPosSpeech2 = 16;
var currentBottomPosSpeech2 = 15;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech2() {
  currentLeftPosSpeech2 += .04;
  speechBubble2.style.left = currentLeftPosSpeech2 + "%";
  if (Math.abs(currentLeftPosSpeech2) >= 38) {
    currentLeftPosSpeech2 = 16;

  }
  // currentBottomPosSpeech2 += .04;
  // speechBubble2.style.bottom = currentBottomPosSpeech2 + "%";
  // if (Math.abs(currentBottomPosSpeech2) >= 63) {
  //
  //   currentBottomPosSpeech2 = 53;
  // }
  requestAnimationFrame(moveSpeech2);

};
moveSpeech2();

//enemy3

var theEnemy3 = document.getElementById('enemies3');
var currentLeftPos3 = 80;
var currentBottomPos3 = 85;

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
  currentBottomPos3 += 0;
  theEnemy3.style.bottom = currentBottomPos3 + "%";
  if (Math.abs(currentBottomPos3) <= 55) {

    currentBottomPos3 = 85;
  }
  requestAnimationFrame(moveEnemy3);

};

moveEnemy3();

//speech3
var speechBubble3 = document.getElementById('speech3');
var currentLeftPosSpeech3 = 79;
var currentBottomPosSpeech3 = 85;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveSpeech3() {
  currentLeftPosSpeech3 -= .04;
  speechBubble3.style.left = currentLeftPosSpeech3 + "%";
  if (Math.abs(currentLeftPosSpeech3) <= 53) {
    currentLeftPosSpeech3 = 79;

  }
  currentBottomPosSpeech3 += 0;
  speechBubble3.style.bottom = currentBottomPosSpeech3 + "%";
  if (Math.abs(currentBottomPosSpeech3) <= 63) {

    currentBottomPosSpeech3 = 85;
  }
  requestAnimationFrame(moveSpeech3);

};
moveSpeech3();

//enemy4

var theEnemy4 = document.getElementById('enemies4');
var currentLeftPos4 = 80;
var currentBottomPos4 = 25;

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
  currentBottomPos4 += .04;
  theEnemy4.style.bottom = currentBottomPos4 + "%";
  if (Math.abs(currentBottomPos4) >= 45) {

    currentBottomPos4 = 25;
  }
  requestAnimationFrame(moveEnemy4);

};

moveEnemy4();

//speech4
var speechBubble4 = document.getElementById('speech4');
var currentLeftPosSpeech4 = 79;
var currentBottomPosSpeech4 = 26;

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
  currentBottomPosSpeech4 += .04;
  speechBubble4.style.bottom = currentBottomPosSpeech4 + "%";
  if (Math.abs(currentBottomPosSpeech4) >= 46) {
    currentBottomPosSpeech4 = 26;
  }

  requestAnimationFrame(moveSpeech4);

};
moveSpeech4();


function collisionDetection1() {
  // var enemiesFirst = document.getElementById('enemies1');
  // var enBot = enemiesFirst.style.bottom;
  // var enLeft = enemiesFirst.style.left;
  for (var missile = 0; missile < missiles.length; missile = missile + 1) {
    // if(missiles[missile].bottom <= enemiesFirst.top + '%')

    if (
      ((missiles[missile].bottom + "%") >= theEnemy1.style.bottom) &&
      ((missiles[missile].bottom + "%") <= (parseInt(theEnemy1.style.bottom, 10) + 2) + "%") &&
      (missiles[missile].left >= parseInt(theEnemy1.style.left, 10) - 5) &&
      (missiles[missile].left <= parseInt(theEnemy1.style.left, 10) - 2)
    ) {
      theEnemy1.style.display = "none";
      missiles.splice(missile, 1);
    } else if (
      ((missiles[missile].bottom + "%") >= theEnemy2.style.bottom) &&
      ((missiles[missile].bottom + "%") <= (parseInt(theEnemy2.style.bottom, 10) + 2) + "%") &&
      (missiles[missile].left >= parseInt(theEnemy2.style.left, 10) - 5) &&
      (missiles[missile].left <= parseInt(theEnemy2.style.left, 10) - 2)
    ) {
      theEnemy2.style.display = "none";
        missiles.splice(missile, 1);
    } else if (
      ((missiles[missile].bottom + "%") >= theEnemy3.style.bottom) &&
      ((missiles[missile].bottom + "%") <= (parseInt(theEnemy3.style.bottom, 10) + 2) + "%") &&
      (missiles[missile].left >= parseInt(theEnemy3.style.left, 10) - 13) &&
      (missiles[missile].left <= parseInt(theEnemy3.style.left, 10) - 9)
    ) {
      theEnemy3.style.display = "none";
        missiles.splice(missile, 1);
    } else if (
    ((missiles[missile].bottom + "%") >= theEnemy4.style.bottom) &&
    ((missiles[missile].bottom + "%") <= (parseInt(theEnemy4.style.bottom, 10) + 2) + "%") &&
    (missiles[missile].left >= parseInt(theEnemy4.style.left, 10) - 16) &&
    (missiles[missile].left <= parseInt(theEnemy4.style.left, 10) - 12)
  ) {
    theEnemy4.style.display = "none";
      missiles.splice(missile, 1);
  }
}
};

function gameLoop() {
  setTimeout(gameLoop, 50),
    moveMissiles();
  drawMissiles();
  collisionDetection1();
  rotationCalculator()
};

gameLoop();


let restartFun = document.getElementById('restart');

//SPACE INVADERS END


//MODALS SECTION

// Get the modal 1
var modal = document.getElementById("projectsModal1");

// Get the button that opens the modal
var btn = document.getElementById("enemies2");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal 2
var modal1 = document.getElementById("skillsModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("enemies1");


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
