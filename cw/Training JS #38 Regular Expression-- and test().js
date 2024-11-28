 // https://www.codewars.com/kata/573975d3ac3eec695b0013e0

 function findSimilarity(str, word) {
    const pattern = new RegExp(`^${word[0]}.{${word.length - 2}}${word[word.length - 1]}$`);
    const similarWords = str.split(' ').filter(w => pattern.test(w));
    return similarWords.join(' ');
}
  