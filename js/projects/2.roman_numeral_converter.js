function convertToRoman(num) {
  const obj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  // convert the num into a string to get the array with each digit
  const numStr = `${num}`;
  const arrStr = numStr.split('');

  // getting the keys sorted from the greater to the smallest
  const arrKeysSorted = Object.keys(obj).sort((a, b) => b - a);
  let resultStr = '';

  // loop every digit
  for (let i = 0; i < arrStr.length; i++) {
    const exp = (arrStr.length - i - 1);
    const units = Math.pow(10, exp); // 1, 10, 100, etc
    let value = Number(arrStr[i]) * units;

    if (value > 0) {
      // filtering the keys by the ones with same length as the exponent and less or equal than the value
      const arrayCandidates = arrKeysSorted.filter((item) => item.length === (exp + 1) && Number(item) <= value);

      for (let j = 0; j < arrayCandidates.length; j++) {
        // for each candidate check if it can be applied more than once
        while (arrayCandidates[j] <= value) {
          resultStr += `${obj[arrayCandidates[j]]}`;
          value -= Number(arrayCandidates[j]);
        }
      }
    }
  }
  
  return resultStr;
}

console.log(
  //convertToRoman(2) //should return the string II.
  //convertToRoman(3) //should return the string III.
  //convertToRoman(4) //should return the string IV.
  //convertToRoman(5) //should return the string V.
  //convertToRoman(9) //should return the string IX.
  //convertToRoman(12) //should return the string XII.
  //convertToRoman(16) //should return the string XVI.
  //convertToRoman(29) //should return the string XXIX.
  //convertToRoman(44) //should return the string XLIV.
  //convertToRoman(45) //should return the string XLV.
  //convertToRoman(68) //should return the string LXVIII
  //convertToRoman(83) //should return the string LXXXIII
  //convertToRoman(97) //should return the string XCVII
  //convertToRoman(99) //should return the string XCIX
  //convertToRoman(400) //should return the string CD
  //convertToRoman(500) //should return the string D
  //convertToRoman(501) //should return the string DI
  //convertToRoman(649) //should return the string DCXLIX
  //convertToRoman(798) //should return the string DCCXCVIII
  //convertToRoman(891) //should return the string DCCCXCI
  //convertToRoman(1000) //should return the string M
  //convertToRoman(1004) //should return the string MIV
  //convertToRoman(1006) //should return the string MVI
  //convertToRoman(1023) //should return the string MXXIII
  //convertToRoman(2014) //should return the string MMXIV
  convertToRoman(3999) //should return the string MMMCMXCIX
);
