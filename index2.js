let element = document.documentElement;
let isFullscreen = false;
let size = 50;
let speed = 2;

// Start & Stop Animation
window.addEventListener("DOMContentLoaded", (event) => {
  const div = document.getElementById("div-1");
  const p = document.getElementById("p-1");
  const container = document.getElementById("screen");

  const animation_run = document.querySelector("#start-btn");
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
      p.style.fontSize = `${newSize}px`;
      size = parseInt(newSize);
    }
  });

  // Font color
  color.addEventListener("input", function () {
    p.style.color = color.value;
  });

  // Change bg color
  const bgColorInput = document.querySelector("#bgcoloring");

  bgColorInput.addEventListener("input", function () {
    container.style.backgroundColor = bgColorInput.value;
  });

  // //change font color
  // color.addEventListener('input', function() {
  //     ctx.fillStyle = color.value;
  // });

  // Frame style change
  frameSelect.addEventListener("change", function () {
    if (frameSelect.value === "brick") {
      container.style.backgroundImage = "url(brick.jpg)";
      container.style.backgroundSize = "cover";
    } else if (frameSelect.value === "none") {
      container.style.backgroundImage = "";
      container.style.backgroundColor = bgColorInput.value || "black";
    } else {
      container.style.backgroundImage = "";
    }
  });

  // Font Family
  font.addEventListener("change", function () {
    if (font.value == "polkadot") {
      p.classList.remove("lobster");
      p.classList.add("polkadot");
    } else if (font.value == "lobster") {
      p.classList.remove("polkadot");
      p.classList.add("lobster");
    }
  });

  // Font Style
  fontStyle.addEventListener("change", function () {
    if (fontStyle.value == "none") {
      p.classList.remove("neon");
      p.classList.remove("style-2");
    } else if (fontStyle.value == "neon") {
      p.classList.add("neon");
      p.classList.remove("style-2");
    } else if (fontStyle.value == "") {
      p.classList.add("style-2");
      p.classList.remove("neon");
    }
  });

  animation_run.addEventListener("click", function () {
    div.classList.toggle(animationStyle.value);
  });

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
  document.getElementById("font-input").value = 200;
  document.getElementById("coloring").value = defaultColor;
  document.getElementById("font").value = "1";
  document.getElementById("font-style").value = "1";
  document.getElementById("frame").value = "1"; // Reset to default "Frame Style"
  document.getElementById("bgcoloring").value = "#000000"; // Reset background color picker
  document.getElementById("animation-style").value = "1";

  // Remove animations
  div.classList.remove("run");
  div.classList.remove("flicker");
  size = 200;
  speed = 2;

  // When reset, reset bg to black
  container.style.backgroundColor = "black";
  container.style.backgroundImage = "";
}

const container = document.getElementById("screen");
const fontSizeInput = document.getElementById("font-input");
const colorInput = document.getElementById("coloring");
const fontSelect = document.getElementById("font");
const inputting = document.getElementById("textinput");
const resetButton = document.getElementById("reset-btn");
const canvas = document.getElementById("p-1");
const ctx = canvas.getContext("2d");
var x = canvas.width / 2 / window.devicePixelRatio;
var y = canvas.height / 2 / window.devicePixelRatio;

let defaultText = "Welcome!!";
let defaultFontSize = 50; // Adjusted to match the initial canvas font size
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

const drawText = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colorInput.value;
  ctx.font = `${fontSizeInput.value}pt ${fontSelect.value}`;
  ctx.fillText(
    inputting.value || defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );
};

fontSizeInput.addEventListener("input", drawText);
colorInput.addEventListener("input", drawText);
inputting.addEventListener("input", drawText);
fontSelect.addEventListener("change", drawText);

resetButton.addEventListener("click", () => {
  inputting.value = defaultText;
  fontSizeInput.value = defaultFontSize;
  colorInput.value = defaultColor;
  fontSelect.value = defaultFont;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = defaultColor;
  ctx.font = `${defaultFontSize}pt ${defaultFont}`;
  ctx.fillText(
    defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );
});

// function scroll() {
//   setInterval(() => {
//     if (x - ctx.measureText(inputting.value).width / 2 >= x)
//       x = - ctx.clientWidth / window.devicePixelRatio
//   }, 10);
// }

// function LeftToRight() {
//   var step = 0;
//   var steps = canvas.width + 50;

//   step++;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.save();
//   ctx.translate(step, canvas.height /2);
//   drawText();
//   ctx.restore();
//   if (step = steps)
//     step = -50;
//   if (step < steps)
//     var t = setTimeout('LeftToRight()', delay);
// }

function scroll_animation() {
  // Looping animation
  requestAnimationFrame(scroll_animation); // loop

  // Wrap around if x exceeds canvas width
  if (x - ctx.measureText(inputting.value).width / 2 > canvas.width) {
    x = -(canvas.width + ctx.measureText(inputting.value).width) / 2;
  }

  x += 1;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText();
}

let anime = document.getElementById("animation-style");

anime.addEventListener("change", function(){
  let animating = anime.value;

  switch (animating) {
    case "run":
      scroll_animation();
      console.log("It works");
      console.log(scroll_animation());
      break;
    case "flicker":
      console.log("It works");
      break;
    default:
      break;
  }
});