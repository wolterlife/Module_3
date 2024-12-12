
function persistence(n) {
    n = n.toString().split('')
    let s = 0;
    while (n.length > 1) {
        n = n.map(el => +el).reduce((previousValue, currValue) => previousValue * currValue).toString().split('')
        s++;
    }
    return s
}