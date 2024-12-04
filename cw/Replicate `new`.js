// https://www.codewars.com/kata/558cb3df5f511f40d500001d/

function nouveau (Constructor, ...args) {
    const instance = Object.create(Constructor.prototype);
    const result = Constructor.apply(instance, args);
    return result === Object(result) ? result : instance;
  }
