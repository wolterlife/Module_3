// https://www.codewars.com/kata/57202aefe8d6c514300001fd/

function saleHotdogs(n){
    if (n < 5) return n * 100
    if (n >= 5 && n < 10) return n * 95
    if (n >= 10) return n * 90
}

console.log(saleHotdogs(4)) // 400