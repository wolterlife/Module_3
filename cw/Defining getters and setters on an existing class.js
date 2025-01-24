// https://www.codewars.com/kata/55bcf04de45497c54a0000d0/

Object.defineProperty(Person.prototype, "name", {
  get: Person.prototype.getName,
  set: function (name) { [this.firstName, this.lastName] = name.split(" "); },
});

Person.name;
Person.name = 8;
