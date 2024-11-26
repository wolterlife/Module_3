// https://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
    function reverseNumber(num) {
      return Number(num.toString().split('').reverse().join(''));
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
      const num1 = arr[i];
      const num2 = arr[i + 1];
  
      if (num1 === reverseNumber(num2) || num1 === num2) {
        return [num1, num2];
      }
    }

    return [-1, -1];
}