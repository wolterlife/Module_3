// https://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
}