// https://www.codewars.com/kata/5729b103dd8bac11a900119e/

function fiveLine(s) {
    let sTrim = s.trim();
    return `${sTrim}\n${sTrim.repeat(2)}\n${sTrim.repeat(3)}\n${sTrim.repeat(4)}\n${sTrim.repeat(5)}`;
}