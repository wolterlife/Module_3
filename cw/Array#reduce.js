// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3

Array.prototype.reduce = function (process, initial) {
  let hasInitial = initial === undefined
  let reduction = hasInitial ? this[0] : initial;
  for (let i = hasInitial ? 0 : 1; i < this.length; i++) {
    reduction = process(reduction, this[i]);
  }
  return reduction;
}