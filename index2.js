document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textinput');
  const fontSelect = document.getElementById('font');
  const fontSizeInput = document.getElementById('font-input');
  const fontStyleSelect = document.getElementById('font-style');
  const fontColorInput = document.getElementById('coloring');
  const bgColorInput = document.getElementById('bgcoloring');
  const frameSelect = document.getElementById('frame');
  const animationSelect = document.getElementById('animation-style');
  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');
  const resetBtn = document.getElementById('reset-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const canvas = document.getElementById('p-1');
  const ctx = canvas.getContext('2d');
  let animationSpeed = 1;

  function updateCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSizeInput.value || 200 }px ${fontSelect.value || 'Arial'}`;
      ctx.fillStyle = fontColorInput.value || '#000000';
      ctx.fillText(textInput.value || 'Welcome!!', 100, 100);
  }

  function applyFrameStyle() {
      const frameStyle = frameSelect.value;
      if (frameStyle === 'brick') {
          canvas.style.borderImage = 'url(brick.jpg) 30 round';
      } else if (frameStyle === 'sky') {
          canvas.style.borderImage = 'url(sky.jpg) 30 round';
      } else {
          canvas.style.borderImage = 'none';
      }
  }

  function applyAnimation() {
      const animationStyle = animationSelect.value;
      canvas.className = '';
      if (animationStyle === 'run') {
          canvas.classList.add('run');
      } else if (animationStyle === 'flicker') {
          canvas.classList.add('flicker');
      }
  }

  textInput.addEventListener('input', updateCanvas);
  fontSelect.addEventListener('change', updateCanvas);
  fontSizeInput.addEventListener('input', updateCanvas);
  fontColorInput.addEventListener('input', updateCanvas);
  bgColorInput.addEventListener('input', () => {
      canvas.style.backgroundColor = bgColorInput.value;
  });
  frameSelect.addEventListener('change', applyFrameStyle);
  animationSelect.addEventListener('change', applyAnimation);

  increaseBtn.addEventListener('click', () => {
      animationSpeed += 0.1;
      canvas.style.animationDuration = `${animationSpeed}s`;
  });

  decreaseBtn.addEventListener('click', () => {
      if (animationSpeed > 0.1) {
          animationSpeed -= 0.1;
          canvas.style.animationDuration = `${animationSpeed}s`;
      }
  });

  resetBtn.addEventListener('click', () => {
      textInput.value = '';
      fontSelect.value = '1';
      fontSizeInput.value = '';
      fontColorInput.value = '#000000';
      bgColorInput.value = '#ffffff';
      frameSelect.value = '1';
      animationSelect.value = '1';
      animationSpeed = 1;
      updateCanvas();
      applyFrameStyle();
      applyAnimation();
  });

  fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
          canvas.requestFullscreen();
      } else {
          document.exitFullscreen();
      }
  });

  updateCanvas();
});
