// https://www.codewars.com/kata/527176c487961e5900000106

Function.prototype.pipe = function(nextFunction) {
    let firstFunction = this;
    
    return function(arg) {
        return nextFunction(firstFunction(arg));
    };
};

