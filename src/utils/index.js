
export function debounce(func, wait) {
  let timer;
  return (...args) => {
    if(!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

export const scrollAnchor = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
  });
};

export const scroll = (top) => {
  window.scroll({
    top,
    left: 0,
    behavior: 'smooth',
  });
};

class UidSingleton {
  constructor() {
    this._counter = 0;
  }

  next() {
    this._counter += 1;
    return this._counter;
  }
}

const uidSingleton = new UidSingleton();

export const useUid = () => (
  uidSingleton.next()
);
