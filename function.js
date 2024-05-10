
// Start & Stop Animation
function Toggle() {
  const list = document.getElementById("span-1");
  list.classList.toggle("run");
}

// Fullscreen
var element = document.documentElement;
let isFullscreen = false;

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
