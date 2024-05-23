let element = document.documentElement;
let isFullscreen = false;
let size = 300;

// Default Text style
const defaultFontSize = '300px';
const defaultColor = 'red';
const defaultFontFamily = 'polkadot';

// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {
    const div = document.getElementById('div-1');
    const p = document.getElementById('p-1');

    const animationRunBtn = document.querySelector('#start-btn');
    const fullscreenBtn = document.querySelector('#fullscreen-btn');
    const animationStyle = document.querySelector('#animation-style');
    const fontStyle = document.querySelector('#font-style');
    const fontSelect = document.querySelector('#font');
    const colorInput = document.querySelector('#coloring');
    const increaseBtn = document.querySelector('#increase');
    const decreaseBtn = document.querySelector('#decrease');
    const fontSizeInput = document.getElementById('font_input');
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
        if (fontSelect.value === 'polkadot') {
            p.classList.remove('lobster');
            p.classList.add('polkadot');
        } else if (fontSelect.value === 'lobster') {
            p.classList.remove('polkadot');
            p.classList.add('lobster');
        }
    });

    // Change font style
    fontStyle.addEventListener('change', function() {
        if (fontStyle.value === 'none') {
            p.classList.remove('neon');
            p.classList.remove('style-2');
        } else if (fontStyle.value === 'neon') {
            p.classList.add('neon');
            p.classList.remove('style-2');
        } else if (fontStyle.value === 'style-2') {
            p.classList.add('style-2');
            p.classList.remove('neon');
        }
    });

    // Start & Stop Animation
    animationRunBtn.addEventListener('click', function() {
        div.classList.toggle(animationStyle.value);
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
    paragraph.style.fontSize = defaultFontSize;
    paragraph.style.color = defaultColor;
    paragraph.style.fontFamily = defaultFontFamily;

    // Reset input values
    document.getElementById('font_input').value = 300;

    // Reset size
    size = 300;
}

function Menu() {
    var container = document.getElementById('container');
    if (menu.textContent === '>>') {
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
