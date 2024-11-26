// https://www.codewars.com/kata/582887f7d04efdaae3000090/

function findSenior(list) {
    const maxAge = list.reduce((max, developer) => Math.max(max, developer.age), list[0].age);
    return list.filter(developer => developer.age === maxAge);
}