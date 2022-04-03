export function debounce(func, wait) {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

export const scrollAnchor = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

export const scroll = (top: number) => {
  window.scroll({
    top,
    left: 0,
    behavior: 'smooth',
  });
};
