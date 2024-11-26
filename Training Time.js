// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr,...swaps){
    swaps.forEach(([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    });
    return arr;
}