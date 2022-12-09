function smallestCommonMultiple(min, max, from){
  let found = false;
  let index = 1;

  const arrMin = [];
  const arrMax = [];
  let result = 0;

  while (!found) {
    let minMul = min * index;
    let maxMul = max * index;
    if (arrMax.indexOf(minMul) != -1 && minMul > from) {
      found = true;
      result = minMul;
    } else if (arrMin.indexOf(maxMul) != -1 && maxMul > from) {
      found = true;
      result = maxMul;
    }
    arrMin.push(minMul);
    arrMax.push(maxMul);
    index++;
  }
  return result;
}

function smallestCommons(arr) {
  const newArr = arr.sort((a, b) => a - b);
  let min = newArr[0];
  let max = newArr[1];
  let result = smallestCommonMultiple(min, max, 0);
  console.log(result);
  return result;
  
}

console.log(
  smallestCommons([5, 1])
)
