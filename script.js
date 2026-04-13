function convertToRoman(num) {
    const symbols = [
        ['M', 1000], 
		['CM',900],
        ['D', 500],
		['CD',400],
        ['C', 100], 
		['XC',90],
        ['L', 50],
		['XL',40],
        ['X', 10],
		['IX',9],
        ['V', 5],
		['IV',4],
        ['I', 1]
    ];
    let result = "";
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