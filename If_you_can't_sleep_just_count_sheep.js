// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num) {
    let res = [];
    for (let i = 1; i <= num; i++) {
        res.push(`${i} sheep...`);
    }
    return res.join('');
}

console.log(countSheep(3)); // 1 sheep...2 sheep...3 sheep...
