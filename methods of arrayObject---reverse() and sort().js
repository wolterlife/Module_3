// https://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr){
    return arr.slice().sort((a, b) =>{
    let countA = arr.filter(v => v === a).length
    let countB = arr.filter(v => v === b).length
    if (countA === countB){ return b - a }
    else if (countA > countB) { return 1 }
    else { return -1 }
    })
}