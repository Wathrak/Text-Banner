let element = document.documentElement;
let isFullscreen = false;
let size = 200;
let speed = 2;

// load Content
window.addEventListener("DOMContentLoaded", (event) => {
  const div = document.getElementById("div-1");
  const p = document.getElementById("p-1");
  const container = document.getElementById("screen");
  const main = document.getElementById("main");

  const bubble = document.getElementById("span-div");

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
  color.value = defaultColor;

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

  // Frame style change
  frameSelect.addEventListener("change", function () {
    container.style.backgroundImage = "";
    container.classList.remove("rainbow");
    bubble.style.display = "none";
    removeSnowflakes();
    if (frameSelect.value == "brick") {
      container.style.backgroundImage = "url(brick.jpg)";
      container.style.backgroundSize = "cover";
    } else if (frameSelect.value == "rainbow") {
      container.classList.add("rainbow");
    } else if (frameSelect.value == "bubble") {
      bubble.style.display = "flex";
    } else if (frameSelect.value === "snow") {
      container.style.backgroundImage = "";
      addSnowflakes();
    } else if (frameSelect.value === "none") {
      container.style.backgroundImage = "";
      container.style.backgroundColor = bgColorInput.value || "black";
      removeSnowflakes();
    } else {
      container.style.backgroundImage = "";
      removeSnowflakes();
    }
  });

  // Font Family
  font.addEventListener("change", function () {
    const fonts = [
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
    ];
    fonts.forEach((font) => p.classList.remove(font));
    if (font.value !== "1") {
      p.classList.add(font.value);
    }
  });

  // Font Style
  fontStyle.addEventListener("change", function () {
    p.classList.remove("neon");
    p.classList.remove("flame");
    p.classList.add(fontStyle.value);
  });

  // Animations
  animation.addEventListener("click", function () {
    p.classList.remove("run");
    p.classList.remove("flicker");
    p.classList.remove("scale");
    p.classList.remove("zigzag");
    p.classList.add(animationStyle.value);
  });

  fullscreen.addEventListener("click", function () {
    p.classList.add("run");
  });

  increase.addEventListener("click", function () {
    speed -= 0.1;
    p.style.animationDuration = `${speed}s`;
  });

  decrease.addEventListener("click", function () {
    speed += 0.1;
    p.style.animationDuration = `${speed}s`;
  });

  // Reset button function
  resetButton.addEventListener("click", resetCustomization);
});

function Menu() {
  var container = document.getElementById("container");
  if (menu.textContent == ">>") {
    menu.textContent = "<<";
    menu.style.transform = "translateX(0)";
    container.style.display = "block";
  } else {
    menu.textContent = ">>";
    menu.style.transform = "translateX(-430px)";
    container.style.display = "none";
  }
}

function Fullscreen() {
  if (!isFullscreen) {
    menu.style.transform = "translateX(-430px)";
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

// Default Text style
const defaultText = "Welcome!!";
const defaultFontSize = "200px";
const defaultColor = "#ff0000"; // Default red color
const defaultFontFamily = "timenews";

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
  const bubble = document.getElementById("span-div");

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
  container.classList.remove("rainbow");
  bubble.style.display = "none";
  removeSnowflakes();

  p.classList.remove("run", "flicker", "scale", "zigzag");
}

// snow flake function

function addSnowflakes() {
  const snowContainer = document.getElementById("snow-container");
  snowContainer.innerHTML = ""; // Clear any existing snowflakes

  for (let i = 0; i < 200; i++) {
    // Adjust the number of snowflakes as needed
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height =
      Math.random() * 7 + 3 + "px";
    snowContainer.appendChild(snowflake);
  }
}

function removeSnowflakes() {
  const snowContainer = document.getElementById("snow-container");
  snowContainer.innerHTML = ""; // Clear the snowflakes
}

// Set default text styles
p.style.fontSize = defaultFontSize;
p.style.color = defaultColor;
p.classList.add(defaultFontFamily);
p.textContent = defaultText;
