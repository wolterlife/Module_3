// https://www.codewars.com/kata/5784c8116211383b5f0001d3/

class File {
    constructor(fullName, contents) {
      [this._fullName, this._filename, this._extension] = fullName.match(/^(.*)\.(\w+)$/);
      this._contents = contents;
      this._curline = 0;
      this._curchar = 0;
    }
    get fullName() {
      return this._fullName;
    }
    get filename() {
      return this._filename;
    }
    get extension() {
      return this._extension;
    }
    getContents() {
      return this._contents;
    }
    write(str) {
      this._contents = `${this._contents ? this._contents + '\n' : ''}${str}`;
    }
    gets() {
      return this._contents.split('\n')[this._curline++];
    }
    getc() {
      return this._contents[this._curchar++];
    }
  }