//.........................Converting into string first.............................

const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let text = num.toString();
    let str = ""
    for (let i = text.length - 1; i >= 0; i--) {
        str += text[i]
    }

    return str
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)


//.............................By dividing it by 10..........................

const num2 = 3849;
const num3 = num2.toString()

function reverseGivenInteger2(num3) {
    let str = ""
    for (let i = num3.length - 1; i >= 0; i--) {
        str += num3[i] % 10
    }
    return str
}



console.log(`Reversed integer is: ${reverseGivenInteger2(num3)}`)


//........................Codedamn Solution............................

const num4 = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    return (
        parseFloat(
            num.toString().split('').reverse().join('')
        ) * Math.sign(num)
    )

}

console.log(`Reversed integer is: ${reverseGivenInteger(3849)}`)
