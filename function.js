
// Start & Stop Animation
function Toggle() {
  const list1 = document.getElementById("div-1");
  list1.classList.toggle("run");
}

function Flicker() {
  const list2 = document.getElementById("p-1");
  list2.style.textShadow = "";
  list2.classList.toggle("flicker");
}

// Fullscreen
var element = document.documentElement;
let isFullscreen = false;
let size = 300;

function Fullscreen() {
  if (isFullscreen == false) {
    enterFullscreen();
  }
  else {
    closeFullscreen();
  }
}
function enterFullscreen() {
    element.webkitRequestFullscreen();
    isFullscreen = true;

}
function closeFullscreen() {
    document.webkitExitFullscreen();
    isFullscreen = false;
}
function fontIncrease() {
  size += 50;
  document.getElementById("p-1").style.fontSize = `${size}px`;
}
function fontDecrease() {
  size -= 50;
  document.getElementById("p-1").style.fontSize = `${size}px`;
}

let x = 1;

function switchStyle() {
  var style1 = document.getElementById("style1");
  var style2 = document.getElementById("style2");
  var style3 = document.getElementById("style3");
  
  if (x == 1) {
    style1.href = "style2.css";
    x = 2;
  }
  else if (x == 2) {
    style1.href = "style3.css";
    x = 3;
  }
  else if (x == 3) {
    style1.href = "style1.css";
    x = 1;
  }
}

