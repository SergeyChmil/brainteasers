/****
Найти самую большую пару трехзначных множителей, произведение которых будет палиндромом
 ****/
let finalNumber     =  600851475143;
let primesArr = [];

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

function generatePrimeMultipliers(number){
    // debugger;
    let newPrime = nextPrime(number);
    if(newPrime < 99){
        generatePrimeMultipliers(newPrime);
    }else if( newPrime > 1000){
        searchBiggestPalindrome();
        return;
    }else{
        primesArr.push(newPrime);
        generatePrimeMultipliers(newPrime);
    }
}

function checkIsPalindrome(number){
    let arr = Array.from(number.toString()).map(Number);
    let a = Math.floor(arr.length / 2);
    for (let i = 0; i < a; i++){
        let first = arr[i];
        let last = arr[arr.length - i - 1];
        if(last !== first)  return false;
    }
    return true;
}

function searchBiggestPalindrome(){
    // debugger;
}

checkIsPalindrome(51815);

// generatePrimeMultipliers(2);
