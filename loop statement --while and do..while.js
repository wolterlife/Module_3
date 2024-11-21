// https://www.codewars.com/kata/57216d4bcdd71175d6000560/

function padIt(str,n) {
    let result = str
    let i = 0
    while (i < n) {
        if (i % 2 === 0) {
            result = `*${result}`
        } else {
            result = `${result}*`
        }
        i++;
    }
    return result
}