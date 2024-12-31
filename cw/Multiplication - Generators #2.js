// https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  let b = 1;
  while (true) {
    let c = a * b;
    yield `${a} x ${b} = ${c}`;
    b++;
  }
}