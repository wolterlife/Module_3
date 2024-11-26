// https://www.codewars.com/kata/5828713ed04efde70e000346/

function countLanguages(list) {
    let result = {}
    for (let i in list) {
        let key = list[i].language
        if (!result[key]) {
            result[key] = 1;
        } else {
            result[key]++;
        }
    }
    return result;
}

