function spinalCase(str) {
  const regUpper = /[A-Z]/;
  const arr = str.split('');

  let spinalCase = arr.reduce((accumulator, item, index, array) => {
    if (index > 0 
      && regUpper.test(item) 
      && (array[index - 1] !== ' ' && array[index - 1] !== '_')){
        accumulator +=  '-' + item;
    } else if (item === ' ' || item === '_') {
      accumulator += '-';
    } else {
      accumulator += item;
    }
    return accumulator;
  }, '');
  
  return spinalCase.toLowerCase();
}

console.log(
  //spinalCase("This Is Spinal Tap") //should return the string this-is-spinal-tap.
  //spinalCase("thisIsSpinalTap") //should return the string this-is-spinal-tap.
  //spinalCase("The_Andy_Griffith_Show") //should return the string the-andy-griffith-show.
  //spinalCase("Teletubbies say Eh-oh") //should return the string teletubbies-say-eh-oh.
  spinalCase("AllThe-small Things") //should return the string all-the-small-things.
);
