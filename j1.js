let element = document.documentElement;
let isFullscreen = false;
let size = 100;
let speed = 2;
let a = 0;

// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {
  const div = document.getElementById("div-1");
  const p = document.getElementById("p-1");
  const container = document.getElementById("screen");
  const main = document.getElementById('main');

  const bubble = document.getElementById('span-div');

  const animation = document.querySelector("#start-btn");
  const fullscreen = document.querySelector("#fullscreen-btn");
  const animationStyle = document.querySelector("#animation-style");
  const fontStyle = document.querySelector("#font-style");
  const fontSelect = document.querySelector("#font");
  const color = document.querySelector("#coloring");
  const fontSizeInput = document.getElementById("font-input");
  const resetButton = document.getElementById("reset-btn");
  const frameSelect = document.getElementById("frame");
  const increase = document.querySelector("#increase");
  const decrease = document.querySelector("#decrease");


  // Initialize input values
  fontSizeInput.value = size;

  // Font size input
  fontSizeInput.addEventListener("input", function () {
    const newSize = fontSizeInput.value;
    if (newSize >= 1 && newSize <= 500) {
        canvas.style.fontSize = `${newSize}px`;
      size = parseInt(newSize);
    }
  });

  // Font color
  color.addEventListener("input", function () {
    canvas.style.color = color.value;
  });

  // Change bg color
  const bgColorInput = document.querySelector("#bgcoloring");

  bgColorInput.addEventListener("input", function () {
    container.style.backgroundColor = bgColorInput.value;
  });

  // Frame style change
  frameSelect.addEventListener('change', function() {
    container.style.backgroundImage = '';
    container.classList.remove('rainbow', 'cloud', 'strip');
    bubble.style.display = 'none';
    removeSnowflakes();
    if (frameSelect.value == 'brick') {
        container.style.backgroundImage = 'url(brick.jpg)';
        container.style.backgroundSize = 'cover';
    } else if (frameSelect.value == 'rainbow') {
        container.classList.add('rainbow');
    } else if (frameSelect.value == 'bubble') {
        bubble.style.display = 'flex';
    } else if (frameSelect.value === "snow") {
     container.style.backgroundImage = "";
     addSnowflakes();
    } else if (frameSelect.value == 'cloud') {
      container.classList.add('cloud');
    } else if (frameSelect.value == 'strip') {
      container.classList.add('strip');
    } else if (frameSelect.value == "none") {
      container.style.backgroundImage = "";
      container.style.backgroundColor = bgColorInput.value || "black";
      removeSnowflakes();
    }
});

  // Font Family
  font.addEventListener("change", function () {
    if (font.value == "polkadot") {
        canvas.classList.remove("lobster");
        canvas.classList.add("polkadot");
    } else if (font.value == "lobster") {
        canvas.classList.remove("polkadot");
        canvas.classList.add("lobster");
    }
  });
  
  // Font family
  fontSelect.addEventListener("change", function () {
    const selectedFont = fontSelect.value;
    const p = document.getElementById("p-1");
    
    // Remove existing font classes
    p.classList.remove(
      "polkadot",
      "lobster",
      "montserrat",
      "courier",
      "franklin",
      "jacquard",
      "dancingScript",
      "danfo",
      "jacquard24",
      "shadows-into-light",
      "koulen",
      "chenla",
      "bayon",
      "sleokchher",
      "timesNew"
    );
  
    // Add class for the selected font
    p.classList.add(selectedFont);
  });

  // Font Style
  fontStyle.addEventListener("change", function () {
    if (fontStyle.value == "none") {
        canvas.classList.remove("neon");
        canvas.classList.remove("style-2");
    } else if (fontStyle.value == "neon") {
        canvas.classList.add("neon");
        canvas.classList.remove("style-2");
    } else if (fontStyle.value == "") {
        canvas.classList.add("style-2");
        canvas.classList.remove("neon");
    }
  });

  // animation.addEventListener("click", function () {
  //   a = animationStyle.value;
  //   div.classList.toggle(animationStyle.value);
    
  // });

  fullscreen.addEventListener("click", function () {
    div.classList.add("run");
  });

  increase.addEventListener("click", function () {
    speed -= 0.5;
    div.style.animationDuration = `${speed}s`;
  });

  decrease.addEventListener("click", function () {
    speed += 0.5;
    div.style.animationDuration = `${speed}s`;
  });

  // Reset button function
  resetButton.addEventListener("click", resetCustomization);
});

function Menu() {
  var container = document.getElementById("container");
  if (menu.textContent == ">>") {
    menu.textContent = "<<";
    menu.style.transform = "translateX(0px)";
    container.style.display = "block";
  } else {
    menu.textContent = ">>";
    menu.style.transform = "translateX(-160px)";
    container.style.display = "none";
  }
}

function Fullscreen() {
  if (!isFullscreen) {
    menu.style.transform = "translateX(-160px)";
    enterFullscreen();
    menu.textContent = ">>";
    document.getElementById("container").style.display = "none";
  } else {
    menu.style.transform = "translateX(0)";
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
  document.body.classList.add("fullscreen");
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  isFullscreen = false;
  document.body.classList.remove("fullscreen");
}

function resetCustomization() {
  // Reset the text style
  const paragraph = document.getElementById("p-1");
  const div = document.getElementById("div-1");
  const container = document.getElementById("screen");
  paragraph.style.fontSize = defaultFontSize;
  paragraph.style.color = defaultColor;
  paragraph.className = "p-1"; // Reset classes
  paragraph.classList.add(defaultFontFamily);
  paragraph.textContent = defaultText; // Reset text content
  const pctx = paragraph.getContext("2d");
  pctx.clearRect(0, 0, canvas.width, canvas.height);
  pctx.fillText(
    "Welcome!!",
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 1.7 / window.devicePixelRatio
  );

  // Reset input values
  document.getElementById("font-input").value = 100;
  document.getElementById("coloring").value = defaultColor;
  document.getElementById("font").value = "1";
  document.getElementById("font-style").value = "1";
  document.getElementById("frame").value = "1"; // Reset to default "Frame Style"
  document.getElementById("bgcoloring").value = "#000000"; // Reset background color picker
  document.getElementById("animation-style").value = "1";

  // Remove animations
  div.classList.remove("run");
  div.classList.remove("flicker");
  div.classList.remove("scale");
  div.classList.remove("zigzag");
  size = 100;
  speed = 2;

  // When reset, reset bg to black
  container.style.backgroundColor = "black";
  container.style.backgroundImage = "";
}

// snow flake function 
function addSnowflakes() {
  const snowContainer = document.getElementById("snow-container");
  snowContainer.innerHTML = ""; // Clear any existing snowflakes

  for (let i = 0; i < 200; i++) { // Adjust the number of snowflakes as needed
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 7 + 3 + "px";
    snowContainer.appendChild(snowflake);
  }
}

function removeSnowflakes() {
  const snowContainer = document.getElementById("snow-container");
  snowContainer.innerHTML = ""; // Clear the snowflakes
}

  //sdadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const container = document.getElementById("screen");
const fontSizeInput = document.getElementById("font-input");
const colorInput = document.getElementById("coloring");
const fontSelect = document.getElementById("font");
const inputting = document.getElementById("textinput");
const fontStyle = document.getElementById("font-style");
const resetButton = document.getElementById("reset-btn");
const canvas = document.getElementById("p-1");
const ctx = canvas.getContext("2d");

let defaultText = "Welcome!!";
let defaultFontSize = 100; // Adjusted to match the initial canvas font size
let defaultColor = "#ffffff"; // Default white color
let defaultFont = "Arial";

canvas.width = container.clientWidth * window.devicePixelRatio;
canvas.height = container.clientHeight * window.devicePixelRatio;
ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
ctx.textAlign = "center";
ctx.fillStyle = defaultColor;
ctx.font = `${defaultFontSize}pt ${defaultFont}`;
ctx.fillText(
  defaultText,
  canvas.width / 2 / window.devicePixelRatio,
  canvas.height / 2 / window.devicePixelRatio
);

// Function to check if the device is mobile
// function isMobileDevice() {
//   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// }
// if (isMobileDevice()) {
//   console.log("hello world");
//   ctx.fillText(
//     defaultText,
//     canvas.width / 2 / window.devicePixelRatio,
//     canvas.height / 2 / window.devicePixelRatio 
//   );
// }

const drawText = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set font properties
  ctx.font = `${fontSizeInput.value}pt ${fontSelect.value}`;
  
  // Handle special font styles
  if (fontStyle.value === "neon") {
    // Draw white outline
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6; // Adjust the width of the outline
    ctx.strokeText(
      inputting.value || defaultText,
      canvas.width / 2 / window.devicePixelRatio,
      canvas.height / 2 / window.devicePixelRatio
    );

    // Create a multiple-layer shadow effect
    const shadowColors = ["#fff", "#fff", "#fff", 
                          "rgb(217, 0, 255)", "rgb(217, 0, 255)", "rgb(217, 0, 255)", "rgb(217, 0, 255)"];
    const shadowBlurs = [7, 10, 21, 42, 82, 92, 102, 151];

    shadowColors.forEach((color, index) => {
      ctx.shadowColor = color;
      ctx.shadowBlur = shadowBlurs[index];
      ctx.fillStyle = colorInput.value;
      ctx.fillText(
        inputting.value || defaultText,
        canvas.width / 2 / window.devicePixelRatio,
        canvas.height / 2 / window.devicePixelRatio
      );
    });

  } else if (fontStyle.value === "flame") {
    // Create flame gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "orange");
    ctx.fillStyle = gradient;
    ctx.shadowColor = "orange";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  } else if (fontStyle.value === "butter") {
    // Create butter effect by drawing multiple shadows manually
    ctx.fillStyle = colorInput.value;
    ctx.fillText(
      inputting.value || defaultText,
      canvas.width / 2 / window.devicePixelRatio,
      canvas.height / 2 / window.devicePixelRatio
    );

    const shadowColors = ["#90B1E0", "#6868AC", "#EF5097", , "#FF80BF", "#FFD662", "#FFB650"];
    shadowColors.forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillText(
        inputting.value || defaultText,
        canvas.width / 2 / window.devicePixelRatio - (index - 7) * 5,
        canvas.height / 2 / window.devicePixelRatio - (index - 7) * 5,
      );
    });

    // Draw the main text over the shadows
    ctx.fillStyle = colorInput.value;
    ctx.fillText(
      inputting.value || defaultText,
      canvas.width / 2 / window.devicePixelRatio,
      canvas.height / 2 / window.devicePixelRatio
    );
  } else if (fontStyle.value === "t3d") {
    // Apply 3D text shadow
    const shadowOffsets = [
      {x: 1, y: 0, color: '#8da1ff'}, {x: -1, y: 2, color: '#c0cbff'},
      {x: -2, y: 1, color: '#8da1ff'}, {x: -2, y: 3, color: '#c0cbff'},
      {x: -3, y: 2, color: '#8da1ff'}, {x: -3, y: 4, color: '#c0cbff'},
      {x: -4, y: 3, color: '#8da1ff'}, {x: -4, y: 5, color: '#c0cbff'},
      {x: -5, y: 4, color: '#8da1ff'}, {x: -5, y: 6, color: '#c0cbff'},
      {x: -6, y: 5, color: '#8da1ff'}, {x: -6, y: 7, color: '#c0cbff'},
      {x: -7, y: 6, color: '#8da1ff'}, {x: -7, y: 8, color: '#c0cbff'},
      {x: -8, y: 7, color: '#8da1ff'}, {x: -8, y: 9, color: '#c0cbff'}
    ];

    shadowOffsets.forEach((shadow, index) => {
      ctx.fillStyle = shadow.color;
      ctx.fillText(
        inputting.value || defaultText,
        (canvas.width / 2 / window.devicePixelRatio) + shadow.x,
        (canvas.height / 2 / window.devicePixelRatio) + shadow.y
      );
    });

    // Draw the main text with the selected font
    ctx.font = `${fontSizeInput.value}pt ${fontSelect.value}`;
    ctx.fillStyle = colorInput.value;
    ctx.fillText(
      inputting.value || defaultText,
      canvas.width / 2 / window.devicePixelRatio,
      canvas.height / 2 / window.devicePixelRatio
    );
  } else if (fontStyle.value === "paper") {
    // apply the code for paper text style to work
  }
  // } else if (fontStyle.value === "paper") {
  //   // Create paper gradient
  //   const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  //   gradient.addColorStop(0.19, "#186cb8");
  //   gradient.addColorStop(0.2, "transparent");
  //   gradient.addColorStop(0.4, "#2a9a9f");
  //   gradient.addColorStop(0.8, "transparent");
  //   gradient.addColorStop(0.8, "transparent");
  //   gradient.addColorStop(0.6, "#f1b211");
  //   gradient.addColorStop(0.79, "transparent");
  //   gradient.addColorStop(0.8, "#e83611");
  //   gradient.addColorStop(1, "#f9002f");

  //   ctx.fillStyle = gradient;
  //   ctx.fillText(
  //     inputting.value || defaultText,
  //     canvas.width / 2 / window.devicePixelRatio,
  //     canvas.height / 2 / window.devicePixelRatio
  //   );
 else if (fontStyle.value === "pop") {
  // Pop text style
  ctx.shadowColor = "#ff1f8f";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 8;
  ctx.shadowOffsetY = 8;

  // Draw shadow text first
  ctx.fillStyle = colorInput.value;
  ctx.fillText(
    inputting.value || defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );

  // Remove shadow for the stroke and main text
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Draw white stroke
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.strokeText(
    inputting.value || defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );

  // Draw the main text
  ctx.fillStyle = colorInput.value;
  ctx.fillText(
    inputting.value || defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  ); 
  } else {
    // For other font styles, handle them as before
    ctx.shadowBlur = 0; // Remove shadow for other styles
    ctx.fillStyle = colorInput.value;
    ctx.fillText(
      inputting.value || defaultText,
      canvas.width / 2 / window.devicePixelRatio,
      canvas.height / 2 / window.devicePixelRatio
    );
  }
};

// Event listeners
fontSizeInput.addEventListener("input", drawText);
colorInput.addEventListener("input", drawText);
inputting.addEventListener("input", drawText);
fontSelect.addEventListener("change", drawText);
fontStyle.addEventListener("change", drawText);

resetButton.addEventListener("click", () => {
  inputting.value = defaultText;
  fontSizeInput.value = defaultFontSize;
  colorInput.value = defaultColor;
  fontSelect.value = defaultFont;
  fontStyle.value = "none"; // Reset font style to none

  canvas.classList.remove('flicker');
  canvas.classList.remove('scale');
  canvas.classList.remove('zigzag');
  running = false;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = defaultColor;
  ctx.font = `${defaultFontSize}pt ${defaultFont}`;
  ctx.fillText(
    defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );
});

// Text Position
var x = 0;
var y = 470;
let running = false;

// Animate Text
function run() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the text at the new position
    ctx.fillText(inputting.value || defaultText, x, y);
    x += 4;
    // If the text moves off the canvas, reset the position
    if (x > canvas.width + ctx.measureText(inputting.value).width/2) {
        x = -ctx.measureText(inputting.value).width;
    }
    requestAnimationFrame(run);
}

function down() {
  if (!running) return;
  x = 650;
  var textLength = ctx.measureText(inputting.value);
  var textHeight = textLength.actualBoundingBoxAscent + textLength.actualBoundingBoxDescent;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the text at the new position
  ctx.fillText(inputting.value || defaultText, x, y);
  y += 4;
  // If the text moves off the canvas, reset the position
  if (y > canvas.height + textHeight / 2) {
      y = -textHeight / 2;
  }
  requestAnimationFrame(down);
}

var angleInDegrees = 0;
function rotation(){
  if (!running) return;
    angleInDegrees += 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.translate(canvas.width / 2 / window.devicePixelRatio, canvas.height / 2 / window.devicePixelRatio);
    ctx.rotate(angleInDegrees * Math.PI / 180);

    ctx.fillText(inputting.value || defaultText, 0, 0);

    ctx.restore();

    requestAnimationFrame(rotation);
}

function resetPosition() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Reset Position
  ctx.fillText(inputting.value || defaultText, canvas.width / 2 / window.devicePixelRatio, canvas.height / 2 / window.devicePixelRatio);
}

let anime = document.getElementById("animation-style");
anime.addEventListener("change", function(){
  let animating = anime.value;

  canvas.classList.remove('flicker');
  canvas.classList.remove('scale');
  canvas.classList.remove('zigzag');
  
  switch (animating) {
    case 'none':
        resetPosition();
        running = false;
        break;
    case "run":
        resetPosition();
        running = true;
        run();
        break;
    case "down":
        resetPosition();
        running = true;
        down();
        break;
    case "rotate":
        resetPosition();
        running = true;
        rotation();
        break;
    case "flicker":
        resetPosition();
        canvas.classList.add('flicker');
        break;
    case 'scale':
        canvas.classList.add('scale');
        break;
    case 'zigzag':
        canvas.classList.add('zigzag');
        break;
    default:
        break;
  }
});
