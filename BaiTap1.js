list = [[1, 2000], [3, 4000], [5, 6000]];
function calculateShoppingBudget(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        unit = list[i][0];
        price = list[i][1];
        sum += unit * price;
    }
    return sum;
}
console.log(calculateShoppingBudget(list));