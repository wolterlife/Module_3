// https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str,c) {
    if (str.includes(c)) return str.lastIndexOf(c) - str.indexOf(c) 
    else return -1;
}