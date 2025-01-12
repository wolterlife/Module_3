// https://www.codewars.com/kata/5641275f07335295f10000d0/

function splitTheBill(group) {
    let totalSpent = 0;
    let numberOfPeople = 0;

    for (let person in group) {
        totalSpent += group[person];
        numberOfPeople++;
    }

    const averageSpent = totalSpent / numberOfPeople;

    const balances = {};
    for (let person in group) {
        const balance = group[person] - averageSpent;
        balances[person] = +balance.toFixed(2);
    }

    return balances;
}