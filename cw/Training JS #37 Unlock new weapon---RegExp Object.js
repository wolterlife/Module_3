// https://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  return count.map(animal => (animals.match(new RegExp(`\\b${animal}\\b`, 'g')) || []).length);
}

// dogrewrwes, dog, cat
// 2 1

// https://www.codewars.com/kata/5735e39313c205fe39001173

// function countAnimals(animals, count) {
//   return count.map(animal => (animals.match(new RegExp(`\\b${animal}\\b`, 'g')) || []).length);
// }

console.log()
// dogrewrwes, dog, cat
// 2 1


console.log(countAnimals('dogrewrwes, dog, cat', ['dog', 'cat']));


console.log(countAnimals('dogrewrwes, dog, cat', ['dog', 'cat']));