let element = document.documentElement;
let isFullscreen = false;
let size = 200;

// Default Text style
const defaultFontSize = '200px';
const defaultColor = '#ff0000'; // Default red color in hex format
const defaultFontFamily = 'timenews';

// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {
    const div = document.getElementById('div-1');
    const p = document.getElementById('p-1');

    const animationRunBtn = document.querySelector('#start-btn');
    const fullscreenBtn = document.querySelector('#fullscreen-btn');
    const fontStyle = document.querySelector('#font-style');
    const fontSelect = document.querySelector('#font');
    const colorInput = document.querySelector('#coloring');
    const increaseBtn = document.querySelector('#increase');
    const decreaseBtn = document.querySelector('#decrease');
    const fontSizeInput = document.getElementById('font-input');
    const resetButton = document.getElementById('reset-btn');

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

    // Change font color
    colorInput.addEventListener('input', function() {
        p.style.color = colorInput.value;
    });

    // Change font family
    fontSelect.addEventListener('change', function() {
        p.className = 'p-1'; // Reset classes
        p.classList.add(fontSelect.value); // Add selected font class
    });

    // Change font style
    fontStyle.addEventListener('change', function() {
        p.classList.toggle('neon', fontStyle.value === 'neon');
    });

    // Chnage bg color
    const bgColorInput = document.querySelector('#bgcoloring');
    const container = document.getElementById('screen');

    bgColorInput.addEventListener('input', function() {
    container.style.backgroundColor = bgColorInput.value;
    });

    // Start & Stop Animation
    animationRunBtn.addEventListener('click', function() {
        div.classList.toggle('run');
    });

    // Fullscreen toggle
    fullscreenBtn.addEventListener('click', function() {
        Fullscreen();
    });

    // Reset button function
    resetButton.addEventListener('click', resetCustomization);
});

function resetCustomization() {
    // Reset the text style
    const paragraph = document.getElementById('p-1');
    const div = document.getElementById('div-1');
    paragraph.style.fontSize = defaultFontSize;
    paragraph.style.color = defaultColor;
    paragraph.className = 'p-1'; // Reset classes
    paragraph.classList.add(defaultFontFamily);

    // Reset input values
    document.getElementById('font-input').value = 200;
    document.getElementById('coloring').value = defaultColor;
    document.getElementById('font').value = 'timenew';
    document.getElementById('font-style').value = 'none';

    // Remove any applied animations
    div.classList.remove('run');
    size = 300;
}

function Menu() {
    var container = document.getElementById('container');
    var menu = document.getElementById('menu');
    if (menu.textContent === '>>') {
        menu.textContent = '<<';
        container.style.display = 'block';
    } else {
        menu.textContent = '>>';
        container.style.display = 'none';
    }
}

function Fullscreen() {
    var menu = document.getElementById('menu');
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
