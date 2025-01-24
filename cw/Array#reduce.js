// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3

Array.prototype.reduce = function (callback, initial) {
  let hasInitial = initial === undefined
  let reduction = hasInitial ? this[0] : initial;
  for (let i = hasInitial ? 0 : 1; i < this.length; i++) {
    reduction = callback(reduction, this[i], i, this);
  }
  return reduction;
}

let a = [1, 2, 3].reduce((prev, curr, indx, arr) => {
  console.log(prev, curr, indx, arr);
})