// https://www.codewars.com/kata/511ed4593ba69cba1a000002/

Function.prototype.wrap = function (callback) {
    return (...args) => callback(this, ...args)
}


function speak(name) {
    return "Hello " + name;
}

speak = speak.wrap(function (original, yourName, myName) {
    greeting = original(yourName);
    return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");
console.log(greeting);


