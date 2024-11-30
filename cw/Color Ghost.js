// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/

class Ghost {
    constructor() {
      const colors = ["white", "yellow", "purple", "red"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
}