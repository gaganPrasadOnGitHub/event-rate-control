import { myDebounce } from './debounce.js';
import { myThrottle } from './throttle.js';

const clickButton = document.getElementById('counterButton');
const normalCount = document.getElementById('normalCount');
const debounceCount = document.getElementById('debounceCount');
const throttleCount = document.getElementById('throttleCount');
const resetButton = document.getElementById('resetButton');

let normalCountValue = 0;
let debounceCountValue = 0;
let throttleCountValue = 0;

const debouncedCount = myDebounce(() => {
  debounceCount.textContent = ++debounceCountValue;
}, 600);

const throttledCount = myThrottle(() => {
  throttleCount.textContent = ++throttleCountValue;
}, 600);

clickButton.addEventListener('click', () => {
  normalCount.textContent = ++normalCountValue;
  debouncedCount();
  throttledCount();
});

resetButton.addEventListener('click', () => {
  normalCountValue = 0;
  debounceCountValue = 0;
  throttleCountValue = 0;

  normalCount.textContent = normalCountValue;
  debounceCount.textContent = debounceCountValue;
  throttleCount.textContent = throttleCountValue;
});
