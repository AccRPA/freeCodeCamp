function palindrome(str) {
  const newStr = str.toLowerCase();
  const regExp = /[a-zA-Z0-9]/g;
  const arr = newStr.match(regExp);
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let isPalindrome = true;

  while (minIndex < maxIndex && isPalindrome) {
    isPalindrome = isPalindrome && (arr[minIndex] === arr[maxIndex]);
    minIndex++;
    maxIndex--;
  }

  return isPalindrome;
}

console.log(
  //palindrome("eye") //should return a boolean.
  //palindrome("eye") //should return true.
  //palindrome("_eye") //should return true.
  //palindrome("race car") //should return true.
  //palindrome("not a palindrome") //should return false.
  //palindrome("A man, a plan, a canal. Panama") //should return true.
  //palindrome("never odd or even") //should return true.
  //palindrome("nope") //should return false.
  //palindrome("almostomla") //should return false.
  //palindrome("My age is 0, 0 si ega ym.") //should return true.
  //palindrome("1 eye for of 1 eye.") //should return false.
  //palindrome("0_0 (: /-\ :) 0-0") //should return true.
  palindrome("five|\_/|four") //should return false.
);
