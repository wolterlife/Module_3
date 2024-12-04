// https://www.codewars.com/kata/56fcc1ee45040039ab0016da/

class Cube {
    constructor(length) {
      this.length = length; 
    }
  
    get surfaceArea() {
      return 6 * (this.length ** 2);
    }
  
    set surfaceArea(area) {
      this.length = Math.sqrt(area / 6);
    }
    
    get volume() {
      return this.length ** 3;
    }
  
    set volume(vol) {
      this.length = Math.cbrt(vol);
    }
  }
  