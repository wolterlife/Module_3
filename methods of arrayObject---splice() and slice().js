// https://www.codewars.com/kata/572cb264362806af46000793/

function threeInOne(arr) {
  let newArr = [];
  let arrRes = arr.slice();

  for (let i = 0; i < arr.length; i += 3) {
    let sum = arrRes.splice(0, 3).reduce((x, y) => x + y, 0);

    newArr.push(sum);
  }

  return newArr;
}