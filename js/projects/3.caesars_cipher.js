function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let strResult = '';
  for (let i = 0; i < str.length; i++){
    const place = alphabet.indexOf(str[i]);

    if (place != -1){
      let originalPlace = place - 13;
      if (originalPlace < 0){
        originalPlace = alphabet.length + originalPlace;
      } 
      strResult = strResult + `${alphabet[originalPlace]}`;
    }else{
      strResult = strResult + `${str[i]}`;
    }
    
  }
  return strResult;
}

console.log(
  //rot13("SERR PBQR PNZC") //should decode to the string FREE CODE CAMP
  //rot13("SERR CVMMN!") //should decode to the string FREE PIZZA!
  //rot13("SERR YBIR?") //should decode to the string FREE LOVE ?
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
);
