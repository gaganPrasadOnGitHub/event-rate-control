export const myThrottle = (callbackFunction, delay) => {
  let isTicking = false;
  return function (...args) {
    if (!isTicking) {
      callbackFunction(...args);
      isTicking = true;
      setTimeout(() => (isTicking = false), delay);
    }
  };
};
