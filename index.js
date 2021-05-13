var rocket = {
  bottom: 0,
  left: 50
};

var missiles = [];

var enemies = [{
    left: 10,
    top: 10
  },
  {
    left: 30,
    top: 10
  },
  {
    left: 40,
    top: 10
  },
  {
    left: 50,
    top: 10
  },
];

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
//   var followCursor = (
//   function() {
//   var s = document.getElementById('rocket');
//   s.style.position = 'absolute';
//
//   return {
//     init: function() {
//       document.body.appendChild(s);
//     },
//
//     run: function(e) {
//       var e = e || window.event;
//       s.style.left = (e.clientX - 10) + 'px';
//       // s.style.top = (e.clientY - 5) + 'px';
//       getMouseCoords(e);
//     }
//   };
// }());
//
// window.onload = function() {
//   followCursor.init();
//   document.body.onmousemove = followCursor.run;
// }


document.onkeydown = function(e) {

  if (e.keyCode === 37) {
    console.log('left');
    rocket.left = rocket.left - 1;

    // moveHero();
  } else if (e.keyCode === 39) {
    console.log('right');
    rocket.left = rocket.left + 1;
    // moveHero();
  } else if (e.keyCode === 32) {
    missiles.push({
      left: rocket.left + 2,
      bottom: rocket.bottom + 1
    });
    drawMissiles()
  }
  drawRocket();
};

function drawRocket() {
  document.getElementById('rocket').style.left = rocket.left + '%';
  document.getElementById('rocket').style.bottom = rocket.bottom + '%';
};

function drawMissiles() {
  document.getElementById('missiles').innerHTML = "";
  for (var missile = 0; missile < missiles.length; missile = missile + 1) {
    document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}%; bottom:${missiles[missile].bottom}%;'></div>`;

  }
};

function moveMissiles() {
  for (var missile = 0; missile < missiles.length; missile = missile + 1) {
    missiles[missile].bottom = missiles[missile].bottom + 5;
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


//
// function ani(){
//     document.getElementById('shooter').className ='shoot';
//   }
