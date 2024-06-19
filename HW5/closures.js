// Exercise 1: Basic Closures

export function createGreeting(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

// Exercise 2: Counter

export function createCounter() {
  let count = 0;

  return {
    increment(amount = 1) {
      count += amount;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

// Exercise 3: Function Store

export function functionStore() {
  const store = new Map();

  return {
    store(key, fn) {
      store.set(key, fn);
    },
    run(key, ...args) {
      const fn = store.get(key);
      if (fn) {
        return fn(...args);
      }
    },
  };
}

// Exercise 4: Private Variables

export function createPerson(name) {
  let _name = name;

  return {
    getName() {
      return _name;
    },
    setName(newName) {
      _name = newName;
    },
  };
}


// Exercise 5: Limited Call Function


export function createLimitedCallFunction(fn, limit) {
  let counter = 0;

  return function (...args) {
    if (counter < limit) {
      counter++;
      return fn(...args);
    }
  };
}
// Exercise 6: Rate Limiter


export function createRateLimiter(fn, limit, interval) {
  let counter = 0;
  let firstCallTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (firstCallTime === 0) {
      firstCallTime = currentTime;
    }

    if (currentTime - firstCallTime >= interval) {
      firstCallTime = currentTime;
      counter = 0;
    }

    if (counter < limit) {
      counter++;
      return fn(...args);
    }
  };
}