// https://www.codewars.com/kata/513e1e47c600c93cef000001/

function Animal(name, type) {
    this.name = name;
    this.type = type;
    // return this;
}

Animal.prototype.toString = function () {
    return `${this.name} is a ${this.type}`;
};