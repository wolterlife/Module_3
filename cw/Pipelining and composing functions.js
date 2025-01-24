// https://www.codewars.com/kata/5298a7b37edba9043200047b/

function pipeline(seed, ...functions) {
  return functions.reduce((result, fn) => fn(result), seed);
}

function compose(...functions) {
  return function (initialValue) {
    return functions.reduceRight((value, fn) => fn(value), initialValue);
  };
} 