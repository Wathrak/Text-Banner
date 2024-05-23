let element = document.documentElement;
let isFullscreen = false;
let size = 300;


// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {

    const div = document.getElementById('div-1');
    const p = document.getElementById('p-1');

    const animation_run = document.querySelector('#start-btn');
    const fullscreen = document.querySelector('#fullscreen-btn');
    const animationStyle = document.querySelector('#animation-style');
    const fontStyle = document.querySelector('#font-style');
    const font = document.querySelector('#font');
    const color = document.querySelector('#coloring');


    color.addEventListener('input', function() {
        p.style.color = color.value;
    });

    font.addEventListener('change', function() {

        if (font.value == 'polkadot') {
            p.classList.remove('lobster');
            p.classList.add('polkadot');
            
        }
        else if (font.value == 'lobster') {
            p.classList.remove('polkadot');
            p.classList.add('lobster');
        }
    });

    fontStyle.addEventListener('change', function() {

        if (fontStyle.value == 'none') {
            p.classList.remove('neon');
            p.classList.remove('style-2');
        }
        else if (fontStyle.value == 'neon') {
            p.classList.add('neon');
            p.classList.remove('style-2');
        }
        else if (fontStyle.value == '') {
            p.classList.add('style-2');
            p.classList.remove('neon');
        }
        
        
    });

    animation_run.addEventListener('click', function() {
        div.classList.toggle(animationStyle.value);
    });

    fullscreen.addEventListener('click', function() {
        div.classList.add('run');
    });



});

function Menu() {
    var container = document.getElementById('container');
    if (menu.textContent == '>>') {
        menu.textContent = '<<';
        container.style.display = 'block';
    } else {
        menu.textContent = '>>';
        container.style.display = 'none';
    }
}

function Fullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
        menu.textContent = '>>';
        document.getElementById('container').style.display = 'none';
    } else {
        closeFullscreen();
    }
}

function enterFullscreen() {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
    isFullscreen = true;
    document.body.classList.add('fullscreen');
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    isFullscreen = false;
    document.body.classList.remove('fullscreen');
}
