// https://www.codewars.com/kata/57241e0f440cd279b5000829/

function sumMul(n,m) {
    let sum = 0;
    if (m < n || n <= 0 || m <= 0) return 'INVALID'
    
    for(let i = n; i < m; i++) {
        if (i % n == 0) sum = sum + i;
    }
    return sum
}

console.log(sumMul(3, 13)) // 20
