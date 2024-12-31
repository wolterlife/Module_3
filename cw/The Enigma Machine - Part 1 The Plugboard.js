// https://www.codewars.com/kata/5523b97ac8f5025c45000900/

Plugboard = function (wires) {
  wires = wires || '';

  if (!wires.match(/^([A-Z][A-Z]){0,10}$/))
    throw Error();

  if (wires.match(/(.).*\1/))
    throw Error();

  this.process = function (wire) {
    let i = wires.indexOf(wire);
    return i == -1 ? wire : wires[i + 1 - 2 * (i % 2)];
  }
}