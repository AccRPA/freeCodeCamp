
function isPrime(num){
  let isPrime = true;
  let j = 1;

  while (j <= num && isPrime){
    if (num % j == 0 
      && j != 1 
      && j != num){
      isPrime = false;
    }
    j++;
  } 
  return isPrime;
}

function sumPrimes(num) {
  let sum = 0;
  // greater than 1
  for (let i = 2; i <= num; i++){
    if (isPrime(i)){
      sum += i;
    }
  }

  return sum;
}

console.log(
  //isPrime(4)
  //sumPrimes(10) //should return a number.
  //sumPrimes(10) //should return 17.
  sumPrimes(977) //should return 73156.
);
