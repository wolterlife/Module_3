// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/

Function.prototype.bind = function (ctx) {
    let func = this;
    return function (...args) {
        // console.log(ctx)
        // console.log(this === global ? ctx : this)
        return func.call(this === global ? ctx : this, ...args);
    };
};

var func = function () {
    return this.prop;
};

var obj1 = { prop: 1 };
var obj2 = { prop: 2 };
var obj3 = { prop: 3 };

// func = func.bind(obj1);
let res = function () {
    return function () {
        .call(obj1)
}
}
// func = func.bind(obj2);
// func = func.bind(obj3);
console.log(func());
