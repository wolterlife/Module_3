// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/

Function.prototype.call = function (thisArg, ...args) {
  return this.apply(thisArg, args);
}