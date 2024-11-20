// https://www.codewars.com/kata/542c0f198e077084c0000c2e

/*

function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) count++
    }
    return count
}

*/


function getDivisorsCnt(n) {
    let count = 0;
    if (n % Math.sqrt(n) === 0) {
        count++;
    }

    for(let i = 0; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            count = count + 2;
        }
    }
    return count;
}

console.log(getDivisorsCnt(10)); // 4
