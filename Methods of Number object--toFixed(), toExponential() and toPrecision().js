// https://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n) {
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    let element = arr[i].toFixed(2);
    if (element < n) {
      count++;
    }
  }

  return count;
}