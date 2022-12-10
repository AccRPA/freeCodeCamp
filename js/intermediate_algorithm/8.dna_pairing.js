function pairElement(str) {
  const obj = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A'
  };
  const arr = str.split('');
  const result = arr.reduce((accumulator, item) => {
    accumulator.push([item, obj[item]]);
    return accumulator;
  }, []);
  return result;
}

console.log(
  //pairElement("GCG") // should return [["G", "C"], ["C", "G"], ["G", "C"]] 
  //pairElement("ATCGA") //should return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]].
  //pairElement("TTGAG") //should return [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]].
  pairElement("CTCTA") //should return [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]].
);
