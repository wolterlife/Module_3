// https://www.codewars.com/kata/56f935002e6c0d55fa000d92/

class Animal {
    constructor(name, age, status, legs, species) {
      this.name = name;
      this.age = age;
      this.status = status;
      this.legs = legs;
      this.species = species;
    }
  
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, status, 0, 'shark');
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, status, 4, 'cat');
    }
  
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, status, 4, 'dog');
      this.master = master;
    }
  
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }
  