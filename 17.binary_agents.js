function binaryAgent(str) {
  const arr = str.split(' ');

  let sentence = arr.reduce((accumulator, word) => {
    let binaryArr = word.split('');
    let decimalNumber = binaryArr.reduce((acc2, binaryNumber, index, array) => {
      let exp = array.length - 1 - index;
      // (2 elevated index) * value 
      let result = Math.pow(2, exp) * binaryNumber;
      return acc2 + result;
    }, 0);
    return accumulator + String.fromCharCode(decimalNumber);
  }, '');

  return sentence;
}

console.log(
  //binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // should return the string Aren't bonfires fun!?
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // should return the string I love FreeCodeCamp!
);
