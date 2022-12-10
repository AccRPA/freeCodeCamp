function myReplace(str, before, after) {
  const regUppercase = /^[A-Z]/;
  let replaceWord = after.toLowerCase();
  if (regUppercase.test(before)) {
    replaceWord = after[0].toUpperCase() + after.substring(1);
  }
  return str.replace(before, replaceWord);
}

console.log(
  //myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") // should return A quick brown fox leaped over the lazy dog
  //myReplace("Let us go to the store", "store", "mall") //should return the string Let us go to the mall.
  //myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return the string He is Sitting on the couch.
  //myReplace("I think we should look up there", "up", "Down") //should return the string I think we should look down there.
  //myReplace("This has a spellngi error", "spellngi", "spelling") //should return the string This has a spelling error.
  //myReplace("His name is Tom", "Tom", "john") //should return the string His name is John.
  myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return the string Let us get back to more Algorithms.
);
