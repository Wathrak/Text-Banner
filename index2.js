

let element = document.documentElement;
let isFullscreen = false;
let size = 300;

// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {

    const animation_run = document.querySelector('#increase');
    animation_run.addEventListener('click', function() {
       const a1 = getElementById('div-1');
       a1.classList.toggle("run");
    });

    const increase = document.querySelector('#increase');
    increase.addEventListener('click', function() {
        size += 50;
        document.getElementById("p-1").style.fontSize = `${size}px`;
    });

    const decrease = document.querySelector('#decrease');
    decrease.addEventListener('click', function() {
        size -= 50;
        document.getElementById("p-1").style.fontSize = `${size}px`;
    });

});

function Menu() {
    document.getElementById('')
}

function Fullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
        document.getElementById('container').style.display = 'none';
    }
}

function enterFullscreen() {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } 
    else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
    isFullscreen = true;
    document.body.classList.add('fullscreen');
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } 
    else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    isFullscreen = false;
    document.body.classList.remove('fullscreen');
}