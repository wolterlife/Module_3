// https://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
    return arr.map(s => {
        const half = s.length / 2;
        if (s.length % 2 === 0) {
        return `${s.slice(0, half)}|${s.slice(half)}`;
        } else {
        return `${s.slice(0, half)}|${s.slice(half+1)}`;
        }
    })
}