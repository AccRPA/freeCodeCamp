function uniteUnique(...arr) {
  const unique = arr.reduce((accumulator, arrItem) => {
    for (let i = 0; i < arrItem.length; i++){
      if (accumulator.indexOf(arrItem[i]) === -1){
        accumulator.push(arrItem[i]);
      }
    }
    return accumulator;
  }, []);
  return unique;
}

console.log(
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
  //uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
  //uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
  //uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].
  //uniteUnique([1, 3, 2], [5, 4], [5, 6]) //should return [1, 3, 2, 5, 4, 6].
  //uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
);
