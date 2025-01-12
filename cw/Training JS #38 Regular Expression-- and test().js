// https://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
    const pattern = new RegExp(`^${word.slice(0, 1)}.{${word.slice(1, -1).length}}${word.slice(-1)}$`);
    const similarWords = str.split(' ').filter(w => pattern.test(w));
    return similarWords.join(' ');
}

console.log(findSimilarity("bag dog dig dot doog dogs", "dog"));