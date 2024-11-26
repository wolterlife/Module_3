// https://www.codewars.com/kata/583d972b8bbc0402cf000121

function askForMissingDetails(list) {
    const arr = [];
    for (let el in list) {
      for (let key in list[el]) {
        if (list[el][key] === null) {
          list[el].question = `Hi, could you please provide your ${key}.`;
          arr.push(list[el]);
        }
      }
    }
    return arr;
}