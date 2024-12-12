// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = function (num) {
//     let res = [];
//     for (let i = 1; i <= num; i++) {
//         res.push(`${i} sheep...`);
//     }
//     return res.join('');
// }
// Array.from()
// console.log(countSheep(3)); // 1 sheep...2 sheep...3 sheep...


var countSheep = function (num) {
    return Array.from({ length: num }, (_, index) => `${index + 1} sheep...`).join('')
}