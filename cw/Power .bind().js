// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/

Function.prototype.bind = function (rootContext) {
    return (childContext = rootContext) => this.call(childContext, childContext);
};