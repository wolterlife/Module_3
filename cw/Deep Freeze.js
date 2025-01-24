// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/
Object.deepFreeze = function (object) {

  const propNames = Object.getOwnPropertyNames(object);
  // console.log({
  //   propNames: {
  //     configurable: false,
  //     writable: false,
  //   }
  // });
  for (const name of propNames) {
    let value = object[name];

    if (typeof value === 'object') {
      Object.deepFreeze(value);
    }

    Object.defineProperties(object, {
      [name]: {
        configurable: false,
        writable: false,
      }
    })
  };
}



var a = { b: [42, { x: 9 }] };
Object.deepFreeze(a)
a.b = 3;
console.log(a);

// let obj = {}
// let rere = "kkk"
obj[rere] = 4;
// console.log(a);
// console.log({ [123]: 'rere' })