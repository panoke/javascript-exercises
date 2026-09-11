const fibonacci = function(number) {

    if (number < 0) { return "OOPS" }
    if (number == 0) { return 0}

    let prevA = 1
    let prevB = 0;

    for (i = 2; i <= number; i++)
    {
        let prevC = prevA
        prevA = prevB + prevA
        prevB = prevC
    }

    return prevA;
};

// Do not edit below this line
module.exports = fibonacci;
