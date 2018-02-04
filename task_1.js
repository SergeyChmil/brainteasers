/****
Найти сумму всех чисел до 1000, кратных 3 или 5
****/

let arr = [];
let i = 1;

const reducer = (accumulator, currentValue) => accumulator + currentValue;

while (i < 1000) {
    if (i % 3 == 0 || i % 5 == 0) {
        if (!arr.includes(i)) {
          arr.push(i);
        }
    }
    i++;
}

console.log(arr.reduce(reducer));
