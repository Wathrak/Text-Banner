let element = document.documentElement;
let isFullscreen = false;
let size = 200;
let speed = 2;

// Default Text style
const defaultText = "Welcome!!";
const defaultFontSize = "200px";
const defaultColor = "#ff0000"; // Default red color
const defaultFontFamily = "timenew";

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
  color.value = defaultColor;

  // Font size input
  fontSizeInput.addEventListener("input", function () {
    const newSize = fontSizeInput.value;
    if (newSize >= 1 && newSize <= 500) {
      p.style.fontSize = `${newSize}px`;
      size = parseInt(newSize);
    }
  });
  
  // Set default text styles
  p.style.fontSize = defaultFontSize;
  p.style.color = defaultColor;
  p.classList.add(defaultFontFamily);
  p.textContent = defaultText;

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
    const fonts = ["polkadot", "lobster", "montserrat", "courier", "franklin", 
                    "jacquard", "dancingScript", "danfo", "jacquard24", "shadows-into-light" ,
                    "koulen" , "chenla" , "bayon" , "sleokchher"];
    fonts.forEach(font => p.classList.remove(font));
    if (font.value !== "1") {
      p.classList.add(font.value);
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
  var menu = document.getElementById("menu");
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
  var menu = document.getElementById("menu");
  if (!isFullscreen) {
    menu.style.transform = "translateX(-160px)";
    enterFullscreen();
    menu.textContent = ">>";
    isFullscreen = true;
  } else {
    menu.style.transform = "translateX(0px)";
    exitFullscreen();
    menu.textContent = "<<";
    isFullscreen = false;
  }
}

function enterFullscreen() {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen();
  }
}

function resetCustomization() {
  const p = document.getElementById("p-1");
  const container = document.getElementById("screen");
  const div = document.getElementById("div-1");
  const fontSizeInput = document.getElementById("font-input");
  const colorInput = document.getElementById("coloring");
  const bgColorInput = document.getElementById("bgcoloring");
  const fontSelect = document.getElementById("font");
  const fontStyleSelect = document.getElementById("font-style");
  const frameSelect = document.getElementById("frame");
  const animationStyleSelect = document.getElementById("animation-style");

  // Reset text content
  p.textContent = defaultText;

  // Reset font size
  p.style.fontSize = defaultFontSize;
  fontSizeInput.value = size;

  // Reset font color
  p.style.color = defaultColor;
  colorInput.value = defaultColor;

  // Reset font family
  p.className = defaultFontFamily;
  fontSelect.value = "1";

  // Reset font style
  p.classList.remove("neon", "style-2");
  fontStyleSelect.value = "1";

  // Reset frame style
  container.style.backgroundImage = "";
  frameSelect.value = "1";

  // Reset background color
  container.style.backgroundColor = "black";
  bgColorInput.value = "#000000";

  // Reset animation style
  div.className = "";
  animationStyleSelect.value = "1";
}
