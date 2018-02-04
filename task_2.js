/****
Найти сумму всех чётных чисел Фибоначчи в интервале до 4 000 000
****/
let a = 0;
let b = 1;
let sum = 0;
let result = 0;

while (b < 4000000) {
    sum = a + b;
    if (sum % 2 == 0) {
        result += sum;
    }
    a = b;
    b = sum;
}
