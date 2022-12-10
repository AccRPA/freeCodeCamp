function addTogether(...args) {
  let x = args[0];
  
  if (typeof (x) !== 'number'){
    return undefined;
  }
  
  let func = function (z) {
    if (typeof(z) !== 'number') {
      return undefined;
    }
    return x + z;
  };


  if (args.length == 2){
    return func(args[1]);
  }
  return func;
}

console.log(
  addTogether(2, 3) //should return 5.
  //addTogether(23, 30) //should return 53.
  //addTogether(5)(7) //should return 12.
  //addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") //should return undefined.
  //addTogether(2, "3") //should return undefined.
  //addTogether(2)([3]) //should return undefined.
  //addTogether("2", 3) //should return undefined.
  //addTogether(5, undefined) //should return undefined.
);
