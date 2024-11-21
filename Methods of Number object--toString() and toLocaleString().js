// https://www.codewars.com/kata/57238ceaef9008adc7000603/

function colorOf(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length < 2) {r = "0" + r};
    if (g.length < 2) {g = "0" + g};
    if (b.length < 2) {b = "0" + b};
    return "#"+r+g+b;
}
  