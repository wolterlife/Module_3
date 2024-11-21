// https://www.codewars.com/kata/57274562c8dcebe77e001012/

function cutIt(arr) {
    let shortLength;
    let result = [];
  
    for (i = 0; i < arr.length; i++) {
      if (shortLength < arr[i].length) {
        shortLength = shortLength;
      } else {
        shortLength = arr[i].length;
      }
    }
  
    for (i = 0; i < arr.length; i++) {
      result.push(arr[i].slice(0, shortLength));
    }
  
    return result;
  }