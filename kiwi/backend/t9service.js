const letters = [
    [], // 0 and 1 have no associated letters
    [], 
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

const combinations = input => {
    if (!input) {
        return []
    }
    const mapping = [];

    //translate
    for (var x = 0; x < input.length; x++) {
        var thisLetter = letters[input.charAt(x)];
        if (thisLetter.length) {
             mapping.push(thisLetter);
        }
    }
    //return all combinations
    return mapping.reduce((one, two) => {
        const ret = [];
        for (let i in one) {
            for (let j in two) {
                ret.push(one[i] + two[j]);
            }
        }
        return ret;
    });
}

module.exports = combinations