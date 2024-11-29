// https://www.codewars.com/kata/573e6831e3201f6a9b000971/

var regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g

function addCommas(money, reg) {
    return money.replace(reg, ",");
}