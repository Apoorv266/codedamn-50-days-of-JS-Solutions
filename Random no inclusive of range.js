function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    let a = Math.floor(Math.random() * (rangeStart - rangeEnd + 1)) + rangeEnd

    return a
}

console.log(`My random number: ${a}`)

{ randomNumberGeneratorInRange(10, 50) } 
