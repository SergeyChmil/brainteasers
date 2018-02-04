/****
Найти сумму всех чётных чисел Фибоначчи в интервале до 4 000 000
****/
//собрать массив простых чисел до заданной суммы
// перебрать массив, умножая самое большое число в нем на прдыдущее
// если результат больше заданного чила - убрать из массива последний элемент, начать заново
// если меньше - умножать сумму на следующее число
// если равно - вернуть последнее значение массива
let primeNumbersArr = [3];
let finalNumber = 600851475143;

function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if(number % i === 0){
        return false;
      }
    }
    return true;
}

function nextPrime(number){
  // debugger;
  do{
    number++;
  }while (!isPrime(number));
  return number;
}

// let i = primeNumbersArr[0];
// while(primeNumbersArr.length < 20){
//   // debugger;
//   primeNumbersArr.push(nextPrime(primeNumbersArr[primeNumbersArr.length - 1]));
//   // debugger;
//   console.log(primeNumbersArr);
// }

function addNextPrime(){
  primeNumbersArr.push(nextPrime(primeNumbersArr[primeNumbersArr.length - 1]));
}

function findResult(){
  // debugger;
  if(primeNumbersArr.length > 1){

  }else{
    addNextPrime();
  }
  console.log(primeNumbersArr);
}

findResult();

// for (let i = 3; i < 600851475143 ; i++) {
//     if(isPrime(i)){
//       primeNumbersArr.push(i);
//     }
//
// }
console.log(primeNumbersArr);
