function diffArray(arr1, arr2) {
/*
  const newArr = [];
  arr1.reduce((accumulator, item) => {
    if (arr2.indexOf(item) == -1){
      accumulator.push(item);
    }
    return accumulator;
  }, newArr);
  arr2.reduce((accumulator, item) => {
    if (arr1.indexOf(item) == -1) {
      accumulator.push(item);
    }
    return accumulator;
  }, newArr);
  return newArr;
*/

  const newArr = arr1.filter((item) => arr2.indexOf(item) == -1);
  return newArr.concat(arr2.filter((item) => arr1.indexOf(item) == -1));
}

console.log(
  //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return an array.
  //diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return ["pink wool"].
  //diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return an array with one item.
  //diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return ["diorite", "pink wool"].
  //diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return an array with two items.
  //diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) //should return [].
  //diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) //should return an empty array.
  //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return [4].
  //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return an array with one item.
  //diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) //should return ["piglet", 4].
  //diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) //should return an array with two items.
  //diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) //should return ["snuffleupagus", "cookie monster", "elmo"].
  //diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) //should return an array with three items.
  //diffArray([1, "calf", 3, "piglet"], [7, "filly"]) //should return [1, "calf", 3, "piglet", 7, "filly"].
  diffArray([1, "calf", 3, "piglet"], [7, "filly"]) //should return an array with six items.
);
