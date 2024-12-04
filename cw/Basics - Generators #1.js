// https://www.codewars.com/kata/5636840bd87777688b00006c/

function* generator() {
    let counter = 1;

    while (true) {
      const resetValue = yield counter;
      if (typeof resetValue === 'number') {
        counter = resetValue;
      } else {
        counter++;
      }
    }
}