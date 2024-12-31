// https://www.codewars.com/kata/58a5d9aaa49f6cd0f9000ad7/

function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;

    const next = a + b;
    a = b;
    b = next;
  }
}