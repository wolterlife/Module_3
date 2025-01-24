function add(n) {
    const chain = function (m) {
        return add(n + m);
    };

    chain.valueOf = function () {
        return n;
    };
    return chain;
}

console.log(add(2) == 2) // true
console.log(add(2) === 2) // true
console.log(add(2)(3) == 5) // true
console.log(add(2)(3) === 5) // true

// С тройным
// Возврат числа а не функции
// Попробовать с valueOf