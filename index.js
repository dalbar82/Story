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


//   var followCursor = (
//
//   function() {
//   var s = document.getElementById('rocket');
//   // s.style.position = 'absolute';
//
//   return {
//     init: function() {
//       document.body.appendChild(s);
//     },
//
//     run: function(e) {
//
//       var e = e || window.event;
//       // console.log(e.clientX)
//       // console.log(window.width)
//       var gameWind = document.getElementById('gamesWindow');
//       var gameWidth = gameWind.width;
//       console.log(gameWidth);
//       s.style.left = (e.clientX / 10) + '%';
//       // s.style.top = (e.clientY - 5) + 'px';
//       // getMouseCoords(e);
//       rocketCoordLeft.push(s.style.left);
//     }
//   };
// }());
//
// window.onload = function() {
//   followCursor.init();
//   document.body.onmousemove = followCursor.run;
// }

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
  // drawRocket();
};

// function drawRocket() {
//   document.getElementById('rocket').style.left = rocket.left + '%';
//   document.getElementById('rocket').style.bottom = rocket.bottom + '%';
// };

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

// function drawEnemies(){
//   document.getElementById('enemies').innerHTML = "";
//   for(var enemy = 0; enemy < enemies.length; enemy = enemy + 1){
//     document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[enemy].left}%; top:${enemies[enemy].top}%;'></div>`;
//   }
// };

// function moveEnemiesRight(){
//   for(var enemy = 0; enemy < enemies.length; enemy = enemy + 1){
//     enemies[enemy].left = enemies[enemy].left + 3;
//   }
// };
//
// function moveEnemiesDown(){
//   for(var enemy = 0; enemy < enemies.length; enemy = enemy + 1){
//   enemies[enemy].top = enemies[enemy].top + 2;
// }
// };

function gameLoop() {
  setTimeout(gameLoop, 50),
    moveMissiles();
  drawMissiles();
  // drawEnemies();
  // moveEnemiesRight();
  // moveEnemiesDown();
  // collisionDetection();
};

gameLoop();

var theEnemy = document.getElementById('enemies');
var currentLeftPos = 27;
var currentTopPos = 55;

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function moveEnemyRight() {
  currentLeftPos += .1;
  theEnemy.style.left = currentLeftPos + "%";
  if (Math.abs(currentLeftPos) >= 37) {
    currentLeftPos = 27;

  }
  currentTopPos += .1;
  theEnemy.style.top = currentTopPos + "%";
  if (Math.abs(currentTopPos) >= 65) {

    currentTopPos = 55;
  }
  requestAnimationFrame(moveEnemyRight);

};
moveEnemyRight();

// function moveEnemyDown(){
//   currentTopPos += .1;
//   theEnemy.style.top = currentTopPos + "%";
//   if(Math.abs(currentTopPos) >= 65){
//
//     window.cancelAnimationFrame()
//   }
//   requestAnimationFrame(moveEnemyDown);
// };
//
// moveEnemyDown();
// function getMouseCoords(e) {
//   var e = e || window.event;
//   document.getElementById('msg').innerHTML = e.clientX + ', ' +
//     e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
// }
//

//
// function ani(){
//     document.getElementById('shooter').className ='shoot';
//   }
