// https://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(numbres) {
  return numbres.reduce((acc, cur, i, nums) => {
    const currentTail = cur % 10;
    const nextArr = nums[i + 1];
    const nextHead = nextArr ? nextArr.toString().split('')[0] : null;
    if (nextHead !== null) {
      return acc * (currentTail + Number(nextHead));
    }
    return acc;
  }, 1);
}