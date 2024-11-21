// https://www.codewars.com/kata/5732d3c9791aafb0e4001236

function roundIt(n) {
    let splittedNumber = n.toString().split(".");
    if (splittedNumber[0].length > splittedNumber[1].length) return Math.floor(n);
    if (splittedNumber[0].length < splittedNumber[1].length) return Math.ceil(n);
    return Math.round(n);
}