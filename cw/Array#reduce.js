// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3

Array.prototype.reduce = function (process, initial) {
  let reduction;
  if (initial == undefined) {
    reduction = this[0];
    for (let i = 1; i < this.length; i++) {
      reduction = process(reduction, this[i]);
    }
  } else {
    reduction = initial;
    for (let i = 0; i < this.length; i++) {
      reduction = process(reduction, this[i]);
    }
  }
  return reduction;
}