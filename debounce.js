export const myDebounce = (callbackFunction, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFunction(...args);
    }, delay);
  };
};
