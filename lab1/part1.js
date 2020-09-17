function arr(size) {
    if (size < 0) {
        throw Error('Invalid size: ' + size)
    }
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = i
    }
    return arr
}

function isDivisibleBy(number, firstDivisor, secondDivisor) {
    // == will attempt to make the data types the same before proceeding.
    // === requires both data types to be the same, as a prerequisite.
    return number % firstDivisor === 0 && number % secondDivisor === 0
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substr(1, string.length - 1)
}

console.log(arr(5))
console.log(isDivisibleBy(45, 5, 15))
console.log(capitalize('work'))
