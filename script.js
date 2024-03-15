function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNumeral = '';

    // Iterate through the keys of the obj in descending order
    for (let i = 0; i <= 6; i++) {
        // Get the current symbol and its value
        let [symbol, value] = obj[i];

        // Repeat adding the current symbol until the value is greater than or equal to the current symbol's value
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }

        // Check for subtractive notation cases (e.g., IV, IX, XL, XC, CD, CM)
        if (i % 2 === 0) {
            let nextIndex = i + 2;
            let nextValue = obj[nextIndex][1];
            if (num >= nextValue - value) {
                romanNumeral += obj[nextIndex][0] + symbol;
                num -= (nextValue - value);
            }
        }
    }

    return romanNumeral;
}

// Test case
// console.log(convertToRoman(36)); // Output: XXXVI

// Export the function for testing
module.exports = convertToRoman;