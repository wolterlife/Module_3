// https://www.codewars.com/kata/572059afc2f4612825000d8a/

function howManydays(month) {
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
        return 30;
        case 2:
        return 28;
        default:
        return 31;
    }
}