// https://www.codewars.com/kata/55bcf04de45497c54a0000d0/

Object.defineProperty(Person.prototype, 'name', {
    get: function() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function(fullName) {
      const parts = fullName.split(' ');
      this.firstName = parts[0] || '';
      this.lastName = parts[1] || '';
    }
  });