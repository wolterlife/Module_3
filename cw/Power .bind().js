// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/

Function.prototype.bind = function(ctx) {
    const func = this;
    return function(...args) {
        const rightCtx = this === global ? ctx : this;
        return func.apply(rightCtx, args);
    } 
}
