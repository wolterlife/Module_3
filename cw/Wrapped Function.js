// https://www.codewars.com/kata/511ed4593ba69cba1a000002/

Function.prototype.wrap = function(callback) {
    return callback.bind(this, this);
}