const body = document.querySelector('body');
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
let interval = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundColor(arrayColors) {
  const randomIndexColor = randomIntegerFromInterval(0, arrayColors.length);
  body.style.background = arrayColors[randomIndexColor];
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  interval = setInterval(() => {
    changeBackgroundColor(colors);
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  clearInterval(interval);
});
