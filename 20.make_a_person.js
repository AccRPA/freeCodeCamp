const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName;
  let lastName;

  let setName = function(fullName){
    let arrName = fullName.split(' ');
    firstName = arrName.length > 0 ? arrName[0] : undefined;
    lastName = arrName.length > 1 ? arrName[1] : undefined;
  };
  setName(firstAndLast);

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () { 
    return lastName;
  };
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
  this.setFirstName = function (first) { 
    firstName = first;
  };
  this.setLastName = function (last) { 
    lastName = last;
  };
  this.setFullName = function (firstAndLast) { 
    setName(firstAndLast);
  };
};

const bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
console.log(
  //Object.keys(bob).length //No properties should be added. Object.keys(bob).length should always return 6.
  //bob instanceof Person //should return true.
  //bob.firstName //should return undefined.
  //bob.lastName //should return undefined.
  //bob.getFirstName() //should return the string Bob.
  //bob.getLastName() //should return the string Ross.
  //bob.getFullName() //should return the string Bob Ross.
  //bob.getFullName() //should return the string Haskell Ross after bob.setFirstName("Haskell").
  //bob.getFullName() //should return the string Haskell Curry after bob.setLastName("Curry").
  //bob.getFullName() //should return the string Haskell Curry after bob.setFullName("Haskell Curry").
  //bob.getFirstName() //should return the string Haskell after bob.setFullName("Haskell Curry").
  bob.getLastName() //should return the string Curry after bob.setFullName("Haskell Curry").
);
