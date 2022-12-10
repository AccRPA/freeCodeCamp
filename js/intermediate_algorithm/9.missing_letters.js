function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // sorting the string received in case is not sorted
  const arrLetters = str.split('').sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
  let startIndex = alphabet.indexOf(arrLetters[0]);
  let missedLetter;
  let index = 0;
  
  // considering there are no repeated letter
  if (alphabet.length === str.length) {
    return;
  }

  while (index < str.length && !missedLetter) {
    if (alphabet[index + startIndex] !== str[index]) {
      missedLetter = alphabet[index + startIndex];
    }
    index++;
  }
  return missedLetter;
}

console.log(
  //fearNotLetter("abce") //should return the string d.
  //fearNotLetter("abcdefghjklmno") //should return the string i.
  //fearNotLetter("stvwx") //should return the string u.
  fearNotLetter("bcdf") //should return the string e.
  //fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.
);
