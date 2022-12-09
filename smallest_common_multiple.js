function smallestCommons(arr){
  const newArr = arr.sort((a, b) => a - b);
  let min = newArr[0];
  let max = newArr[1];
  let found = false;
  let index = 1;

  const arrMin = [];
  const arrMax = [];
  let result = 0;

  while (!found) {
    let minMul = min * index;
    let maxMul = max * index;
    if (arrMax.indexOf(minMul) !== -1) {
      found = true;
      result = minMul;
    } else if (arrMin.indexOf(maxMul) !== -1) {
      found = true;
      result = maxMul;
    }
    arrMin.push(minMul);
    arrMax.push(maxMul);

    if (found){
      for (let i = min; i <= max; i++){
          found &= (result % i === 0);
      }
    }
    index++;
  }
  return result;
}

console.log(
  //smallestCommons([1, 3])
  //smallestCommons([1, 5]) //should return a number.
  //smallestCommons([1, 5]) //should return 60.
  //smallestCommons([5, 1]) //should return 60.
  smallestCommons([2, 10]) //should return 2520.
  //smallestCommons([1, 13]) //should return 360360.
  //smallestCommons([23, 18]) //should return 6056820
);
