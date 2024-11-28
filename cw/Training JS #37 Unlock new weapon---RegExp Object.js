// https://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
    return count.map(animal => {
      const regex = new RegExp(`\\b${animal}\\b`, 'g');
      const matches = animals.match(regex);
      return matches ? matches.length : 0;
    });
} 