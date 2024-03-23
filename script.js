function convertToRoman(num) {
  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i][1]) {
      result += romanSymbols[i][0];
      num -= romanSymbols[i][1];
    }
  }

  return result;
}

