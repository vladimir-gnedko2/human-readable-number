const WORDS = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
};

module.exports = function toReadable(number) {
    if (number === 0) return WORDS[0];
    let arr = ("" + number).split("");
    let human = "";
    if (arr.length === 3) {
        human += `${WORDS[arr[0]]} hundred `;
        arr.splice(0, 1);
    }
    if (arr.length === 2) {
        if (arr[0] == 1) return `${human}${WORDS[arr.join("")]}`.trim();
        if (arr[0] > 1) human += `${WORDS[arr[0] + 0]} `;
        arr.splice(0, 1);
    }
    if (arr[0] > 0) human += `${WORDS[arr[0]]}`;
    return human.trim();
}
