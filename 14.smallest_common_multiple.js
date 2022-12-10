function smallestCommons(arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let array = [];
  // Creating a full array of all values in the range
  for (min; min <= max; min++){
     array.push(min);
  }
  // Creating the function that .every will operate on
  const lowestCommon = (currentValue) => n % currentValue === 0;
  let common = false;
  let n = max* (max-1);
  
  // Checking whether the first value for n is the lowestCommon Multiple
  common =  array.every(lowestCommon);
  
  //Checking for a true result from the array
  while (common === false){
      n++;
      common =  array.every(lowestCommon);
  }
  return n;
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
