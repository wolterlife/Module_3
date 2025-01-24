// https://www.codewars.com/kata/5b4a3153086e91a918000a17/

Num.prototype[Symbol.toPrimitive] = function () { return this.num; };