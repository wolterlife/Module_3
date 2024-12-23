// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/

Object.deepFreeze = function (object) {
  const propNames = Object.getOwnPropertyNames(object);

  for (const name of propNames) {
    const value = object[name];

    if (typeof value === 'object') {
      Object.deepFreeze(value);
    }
  }

  return Object.freeze(object);
};