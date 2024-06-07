let element = document.documentElement;
let isFullscreen = false;
let size = 200;
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

  // // Initialize input values
  // fontSizeInput.value = size;

  // // Font size input
  // fontSizeInput.addEventListener("input", function () {
  //   const newSize = fontSizeInput.value;
  //   if (newSize >= 1 && newSize <= 500) {
  //     p.style.fontSize = `${newSize}px`;
  //     size = parseInt(newSize);
  //   }
  // });

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

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = defaultColor;
  ctx.font = `${defaultFontSize}pt ${defaultFont}`;
  ctx.fillText(
    defaultText,
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );
});


