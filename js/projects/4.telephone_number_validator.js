function telephoneCheck(str) {
  const regExp1 = /^(1\s)\d{3}[\s-]{0,1}\d{3}[\s-]{0,1}\d{4}/; // 1 5555555555 or 1 555 555 5555 or 1 555-555-5555
  const regExp2 = /^1\s{0,1}\(\d{3}\)[\s-]{0,1}\d{3}[\s-]{0,1}\d{4}/; // 1 (555) 555-5555 or 1(555)555-5555
  const regExp3 = /^5\d{2}[\s-]{0,1}\d{3}[\s-]{0,1}\d{4}/; //5555555555 or 555-555-5555 or 555 555 55555
  const regExp4 = /^\(555\)\s{0,1}\d{3}[\s-]{0,1}\d{4}/; // (555)5555555 or (555)555-5555 or (555)555 5555

  console.log('regExp1: ' + regExp1.test(str));
  console.log('regExp2: ' + regExp2.test(str));
  console.log('regExp3: ' + regExp3.test(str));
  console.log('regExp4: ' + regExp4.test(str));
 
  return regExp1.test(str) 
  || regExp2.test(str) 
  || regExp3.test(str) 
  || regExp4.test(str);
}

console.log(
//telephoneCheck("555-555-5555") //should return a boolean.
//telephoneCheck("1 555-555-5555") //should return true.
//telephoneCheck("1 (555) 555-5555") //should return true.
//telephoneCheck("5555555555") //should return true.
//telephoneCheck("555-555-5555") //should return true.
//telephoneCheck("(555)555-5555") //should return true.
telephoneCheck("1(555)555-5555") //should return true.
//telephoneCheck("555-5555") //should return false.
//telephoneCheck("5555555") //should return false.
//telephoneCheck("1 555)555-5555") //should return false.
//telephoneCheck("1 555 555 5555") //should return true.
//telephoneCheck("1 456 789 4444") //should return true.
//telephoneCheck("123**&!!asdf#") //should return false.
//telephoneCheck("55555555") //should return false.
//telephoneCheck("(6054756961)") //should return false.
//telephoneCheck("2 (757) 622-7382") //should return false.
//telephoneCheck("0 (757) 622-7382") //should return false.
//telephoneCheck("-1 (757) 622-7382") //should return false.
//telephoneCheck("2 757 622-7382") //should return false.
//telephoneCheck("10 (757) 622-7382") //should return false.
//telephoneCheck("27576227382") //should return false.
//telephoneCheck("(275)76227382") //should return false.
//telephoneCheck("2(757)6227382") //should return false.
//telephoneCheck("2(757)622-7382") //should return false.
//telephoneCheck("555)-555-5555") //should return false.
//telephoneCheck("(555-555-5555") //should return false.
//telephoneCheck("(555)5(55?)-5555") //should return false.
//telephoneCheck("55 55-55-555-5") //should return false.
//telephoneCheck("11 555-555-5555") //should return false.
);
