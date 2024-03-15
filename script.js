function convertToRoman(num) {
    // Define the Roman numeral symbols and their values, including subtractive notation
    const symbols = [
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

    let romanNumeral = '';

    // Iterate through the symbols array
    for (const [symbol, value] of symbols) {
        // Repeat adding the current symbol until the num is less than the current symbol's value
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

// Test cases
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(36)); // Output: XXXVI
