function dropElements(arr, func) {
  let index = 0;
  let satisfied = false;
  
  while(index < arr.length && !satisfied){
    satisfied = func(arr[index]);
    index++;
  }

  if (satisfied){
    return arr.slice(index-1);
  }else{
    return [];
  }
}

console.log(
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //should return [3, 4].
  //dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].
  //dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].
  //dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].
  //dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //should return [7, 4].
  //dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2]
);

