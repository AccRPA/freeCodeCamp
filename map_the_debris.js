
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const newArr = arr.map((obj) => {
    let avgAlt = obj.avgAlt;
    let ope2 = Math.pow((avgAlt + earthRadius), 3);
    let res1 = (2 * Math.PI) * Math.sqrt(ope2 / GM);
    let result = Math.round(res1);
    return {
      name: obj.name,
      orbitalPeriod: result
    }
  });

  return newArr;
}

console.log(
  //orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]) //should return [{ name: "sputnik", orbitalPeriod: 86400 }].
  orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]) //should return [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }].
);
