
let arr = [[{a: {price: 20}}],[{a: {price: 35}}],[{a: {price: 44}}]]
console.log(arr[0][0].a.price, arr[1][0].a.price, arr[2][0].a.price);
let total = arr[0][0].a.price + arr[1][0].a.price + arr[2][0].a.price
console.log(total);