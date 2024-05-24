let element = document.documentElement;
let isFullscreen = false;
let size = 200;


// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {

    const div = document.getElementById('div-1');
    const p = document.getElementById('p-1');
    const container = document.getElementById('screen');

    const animation_run = document.querySelector('#start-btn');
    const fullscreen = document.querySelector('#fullscreen-btn');
    const animationStyle = document.querySelector('#animation-style');
    const fontStyle = document.querySelector('#font-style');
    // const font = document.querySelector('#font');
    const fontSelect = document.querySelector('#font');
    const color = document.querySelector('#coloring');
    const increaseBtn = document.querySelector('#increase');
    const decreaseBtn = document.querySelector('#decrease');
    const fontSizeInput = document.getElementById('font-input');
    const resetButton = document.getElementById('reset-btn');
    const frameSelect = document.getElementById('frame');

    // Initialize input values
    fontSizeInput.value = size;

    // Font size increase
    increaseBtn.addEventListener('click', function() {
        if (size < 500) {
            size += 1;
            p.style.fontSize = `${size}px`;
            fontSizeInput.value = size;
        }
    });

    // Font size decrease
    decreaseBtn.addEventListener('click', function() {
        if (size > 1) {
            size -= 1;
            p.style.fontSize = `${size}px`;
            fontSizeInput.value = size;
        }
    });

    // Font size input
    fontSizeInput.addEventListener('input', function() {
        const newSize = fontSizeInput.value;
        if (newSize >= 1 && newSize <= 500) {
            p.style.fontSize = `${newSize}px`;
            size = parseInt(newSize);
        }
    });

    // Font color
    color.addEventListener('input', function() {
        p.style.color = color.value;
    });

    // Change bg color
    const bgColorInput = document.querySelector('#bgcoloring');

    bgColorInput.addEventListener('input', function() {
        container.style.backgroundColor = bgColorInput.value;
    });

    // Frame style change
    frameSelect.addEventListener('change', function() {
        if (frameSelect.value === 'brick') {
            container.style.backgroundImage = 'url(brick.jpg)';
            container.style.backgroundSize = 'cover';
        } else if (frameSelect.value === 'none') {
            container.style.backgroundImage = '';
            container.style.backgroundColor = bgColorInput.value || 'black';
        } else {
            container.style.backgroundImage = '';
        }
    });

    // // Font Family
    // font.addEventListener('change', function() {

    //     if (font.value == 'polkadot') {
    //         p.classList.remove('lobster');
    //         p.classList.add('polkadot');
            
    //     }
    //     else if (font.value == 'lobster') {
    //         p.classList.remove('polkadot');
    //         p.classList.add('lobster');
    //     }
    // });

    // Change font family
    fontSelect.addEventListener('change', function() {
        p.className = 'p-1'; // Reset classes
        p.classList.add(fontSelect.value);
    });

    // Font Style
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

    // // Change font style
    // fontStyle.addEventListener('change', function() {
    //     p.classList.toggle('neon', fontStyle.value === 'neon');
    // });

    animation_run.addEventListener('click', function() {
        div.classList.toggle(animationStyle.value);
    });

    fullscreen.addEventListener('click', function() {
        div.classList.add('run');
    });

    

    // Reset button function
    resetButton.addEventListener('click', resetCustomization);


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

// Default Text style
const defaultText = 'Welcome!!';
const defaultFontSize = '200px';
const defaultColor = '#ff0000'; // Default red color
const defaultFontFamily = 'timenews';


function resetCustomization() {
    // Reset the text style
    const paragraph = document.getElementById('p-1');
    const div = document.getElementById('div-1');
    const container = document.getElementById('screen');
    paragraph.style.fontSize = defaultFontSize;
    paragraph.style.color = defaultColor;
    paragraph.className = 'p-1'; // Reset classes
    paragraph.classList.add(defaultFontFamily);
    paragraph.textContent = defaultText; // Reset text content

    // Reset input values
    document.getElementById('font-input').value = 200;
    document.getElementById('coloring').value = defaultColor;
    document.getElementById('font').value = 'timenew';
    document.getElementById('font-style').value = 'none';
    document.getElementById('frame').value = ''; // Reset to default "Frame Style"
    document.getElementById('bgcoloring').value = '#000000'; // Reset background color picker

    // Remove animations
    div.classList.remove('run');
    size = 200;

    // When reset, reset bg to black
    container.style.backgroundColor = 'black';
    container.style.backgroundImage = '';
}