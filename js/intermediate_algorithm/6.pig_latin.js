function translatePigLatin(str) {
  let pigLatin = '';
  const regCons = /^[^aeiou]+/;

  if (regCons.test(str)) {
    // starts with consonants
    let consonantGroup = str.match(regCons)[0];
    pigLatin = `${str.substring(consonantGroup.length)}${consonantGroup}ay`;
  } else {
    // starts with a vowel
    pigLatin = `${str}way`;
  }
  return pigLatin;
}

console.log(
  //translatePigLatin("california") //should return the string aliforniacay.
  //translatePigLatin("paragraphs") //should return the string aragraphspay.
  //translatePigLatin("glove") //should return the string oveglay.
  //translatePigLatin("algorithm") //should return the string algorithmway.
  //translatePigLatin("eight") //should return the string eightway.
  //Should handle words where the first vowel comes in the middle of the word.
  //translatePigLatin("schwartz") //should return the string artzschway.
  //Should handle words without vowels.
  translatePigLatin("rhythm") //should return the string rhythmay.
);
