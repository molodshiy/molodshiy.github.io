function debounce(beforeDebounceFunc, func, time) {
  let timeout;

  return function executedFunction(...args) {
    const laterFunction = () => {
      clearTimeout(timeout);
      func(...args);
    }

    beforeDebounceFunc();

    clearTimeout(timeout);
    timeout = setTimeout(laterFunction, time);
  }
}

export default debounce;
