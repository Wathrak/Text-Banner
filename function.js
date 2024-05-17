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
let element = document.documentElement;
let isFullscreen = false;
let size = 300;

function Fullscreen() {
  if (!isFullscreen) {
    enterFullscreen();
  } else {
    closeFullscreen();
  }
}

function enterFullscreen() {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen();
  }
  isFullscreen = true;
  document.body.classList.add('fullscreen');
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen();
  }
  isFullscreen = false;
  document.body.classList.remove('fullscreen');
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
  const style1 = document.getElementById("style1");
  const style2 = document.getElementById("style2");
  const style3 = document.getElementById("style3");
  
  if (x === 1) {
    style1.href = "style2.css";
    x = 2;
  } else if (x === 2) {
    style1.href = "style3.css";
    x = 3;
  } else if (x === 3) {
    style1.href = "style1.css";
    x = 1;
  }
}

// Add event listeners for fullscreen changes
document.addEventListener('fullscreenchange', onFullScreenChange);
document.addEventListener('webkitfullscreenchange', onFullScreenChange);
document.addEventListener('mozfullscreenchange', onFullScreenChange);
document.addEventListener('MSFullscreenChange', onFullScreenChange);

function onFullScreenChange() {
  isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  if (isFullscreen) {
    document.body.classList.add('fullscreen');
  } else {
    document.body.classList.remove('fullscreen');
  }
}
