function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  
  for (let i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}

console.log(
  //sumAll([1, 4]) //should return a number.
  //sumAll([1, 4]) //should return 10.
  //sumAll([4, 1]) //should return 10.
  //sumAll([5, 10]) //should return 45.
  sumAll([10, 5]) //should return 45.
);
