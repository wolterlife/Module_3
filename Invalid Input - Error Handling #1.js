// https://www.codewars.com/kata/55e6125ad777b540d9000042/

function getCount(words) {
    let convert = typeof words === 'string';
    return {
      vowels: convert ? words.replace(/[^aeiou]/gi, '').length : 0,
      consonants: convert ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '').length : 0
    }
}