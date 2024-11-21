// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str){
    return str.split(' ')
    .map(v=>v
    .slice(0,-1)
    .toUpperCase() +v.slice(-1)
    .toLowerCase())
    .join(' ');
}