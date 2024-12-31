// https://www.codewars.com/kata/56390ac2815fb1222a000070/

function* multiplicationGenerator(n) {
  for (let i = 1; i <= 10; i++) {
    yield `${n} x ${i} = ${n * i}`;
  }
}

function* generator(a, b) {
  for (let i = a; i <= b; i++) {
    yield multiplicationGenerator(i);
  }
}