// https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/

function oddBall(arr) {
    let valuePos = arr.indexOf('odd')
    return arr.includes(valuePos)
}

console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]))