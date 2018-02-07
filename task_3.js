/****
 Найти самый большой простой множитель заданого числа
 ****/
let finalNumber     =  600851475143;

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function nextPrime(number) {
    do {
        number++;
    } while (!isPrime(number));
    return number;
}

function calc(lastPrime) {
    if(finalNumber % lastPrime === 0){
        let res = finalNumber / lastPrime;
        if (finalNumber === lastPrime){
            console.log(finalNumber);
            return;
        }
        if(res !== lastPrime){
            finalNumber = res;
            calc(nextPrime(lastPrime));
        }
    }else{
        calc(nextPrime(lastPrime));
    }
}

calc(2);

