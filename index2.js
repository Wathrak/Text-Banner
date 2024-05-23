

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
        if (size < 500) {
            size += 50;
            if (size > 500) size = 500;
            document.getElementById("p-1").style.fontSize = `${size}px`;
        }
    });

    const decrease = document.querySelector('#decrease');
    decrease.addEventListener('click', function() {
        if (size > 1) {
            size -= 50;
            if (size < 1) size = 1;
            document.getElementById("p-1").style.fontSize = `${size}px`;
        }
    });

    // Change font size based on input
    const fontSizeInput = document.getElementById('font_input');
    fontSizeInput.addEventListener('input', function() {
        const newSize = fontSizeInput.value;
        if (newSize >= 1 && newSize <= 500) {
            document.getElementById("p-1").style.fontSize = `${newSize}px`;
            size = newSize;
        }
    });

    // Change font color
    const colorInput = document.getElementById('coloring');
    colorInput.addEventListener('input', function() {
        const newColor = colorInput.value;
        document.getElementById("p-1").style.color = newColor;
    });

    // Change font 
    const fontSelect = document.getElementById('font');
    fontSelect.addEventListener('change', function() {
        const newFont = fontSelect.value;
        document.getElementById("p-1").style.fontFamily = newFont;
    });

});

function Menu() {
    var container = document.getElementById('container');
    if (menu.textContent == '>>') {
        menu.textContent = '<<';
        container.style.display = 'block';
    }
    else {
        menu.textContent = '>>';
        container.style.display = 'none';
    }
}

function Fullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
        menu.textContent = '>>';
        document.getElementById('container').style.display = 'none';
    }
    else {
        closeFullscreen();
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