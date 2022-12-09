function sumFibs(num) {
  const arr = [1];
  let maxReached = false;
  let index = 0;
  let sum = 1;

  while (index < (num - 1) && !maxReached){
    let value = 0;
    if (index == 0){
      value = 1;
    }else{
      value = arr[index - 1] + arr[index];
    }

    if (value <= num && (value % 2 != 0)) {
      sum += value;
    }
    arr.push(value);
    index++;
  }

  return sum;
}

console.log(
  //sumFibs(1000) //should return 1785.
  //sumFibs(4000000) //should return 4613732.
  //sumFibs(4) //should return 5.
  //sumFibs(10)
  //sumFibs(75024) //should return 60696.
  sumFibs(75025) //should return 135721.
);
