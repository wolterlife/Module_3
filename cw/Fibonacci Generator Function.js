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

/*
next = 0 + 1 = 1
a = 1;
b = 1
// return 1

next = 1 + 1 = 2
a = 1
b = 2
return 1

next = 1 + 2 = 3
a = 2
b = 3
return 2

*/