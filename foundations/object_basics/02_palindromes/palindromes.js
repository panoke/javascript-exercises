const palindromes = function (string) {
    const array = string.toLowerCase().split("").filter(letter => !(letter === " " || letter === "," || letter === "." ||  letter === "!"))
    const reversed = array.toReversed()
    return array.join("") === reversed.join("")
};

// Do not edit below this line
module.exports = palindromes;
