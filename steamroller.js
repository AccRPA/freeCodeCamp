function steamrollArray(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let recursiveArr = steamrollArray(arr[i]);
      newArr = newArr.concat(recursiveArr);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  //steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
  //steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
  //steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
  steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
  //Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
  //Global variables should not be used.
);
