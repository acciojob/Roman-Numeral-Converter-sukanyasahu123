function convertToRoman(num) {
    const symbols = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = "";

        const special = [
        ['CM', 900],
        ['CD', 400],
        ['XC', 90],
        ['XL', 40],
        ['IX', 9],
        ['IV', 4]
    ];


    for (let [sym, val] of special) {
        while (num >= val) {
            result += sym;
            num -= val;
        }
    }

    for (let [sym, val] of symbols) {
        while (num >= val) {
            result += sym;
            num -= val;
        }
    }

    return result;
}

// do not edit below this line
module.exports = convertToRoman;