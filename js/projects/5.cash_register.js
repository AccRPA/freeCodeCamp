function checkCashRegister(price, cash, cid) {
  const currencyChange = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const currencyNames = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];

  if (cid.length == 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let closed = true;
  let arrChange = [];
  let changeDue = cash - price;
  // see in the cash-in-drawer if there is enough money for the change
  for (let i = 0; i < currencyChange.length && changeDue > 0; i++) {
    const currValue = currencyChange[i];
    const currName = currencyNames[i];
    let value = cid.filter((item) => item[0] === currName)[0][1];
    let amountRest = 0;
    
    // get the coin or bill with less or equal value as the change due
    // get if the coin or bill can be applied several times
    while (value > 0 && changeDue > 0 && currValue <= changeDue){
      // round to two decimals
      changeDue = Math.round(((changeDue - currValue) + Number.EPSILON) * 100) / 100 ;
      value = Math.round(((value - currValue) + Number.EPSILON) * 100) / 100;
      amountRest += currValue;
      //console.log(`change: ${changeDue} - currValue: ${currValue} - valueDraw: ${value} - rest: ${amountRest}`);
    }

    if (amountRest > 0){
      arrChange.push([currName , amountRest]);
    }
    closed = closed && (value == 0);
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (closed){
    return { status: "CLOSED", change: cid };
  }else{
    return { status: "OPEN", change: arrChange };
  }
}

console.log(
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return an object.
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return { status: "OPEN", change: [["QUARTER", 0.5]] }
  //checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return { status: "INSUFFICIENT_FUNDS", change: [] }
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return { status: "INSUFFICIENT_FUNDS", change: [] }
  //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }
);
