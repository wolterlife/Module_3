// https://www.codewars.com/kata/57238ceaef9008adc7000603/

function colorOf(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    return '#' +
        r.padStart(2, "0") +
        g.padStart(2, "0") +
        b.padStart(2, "0")
}

console.log(colorOf(1, 2, 3))