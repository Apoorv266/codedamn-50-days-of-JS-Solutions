// Write a program which returns the difference of last position of X and first position of X

//........................My solution............................

const str = 'F(X) !== G(X) !== F(X)';

function getTheGapX(str) {

    let a = str.indexOf("X")
    let b = str.lastIndexOf("X")

    if (a === -1) {
        return -1
    }

    else if (str.lastIndexOf("X") !== -1 && str.indexOf("X") !== -1) {
        return b - a
    }
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)


//........................Codedamn's solution....................................


const str2 = 'XeroX';

function getTheGapX(str2) {
    // write your solution here

    const firstIndex = str2.indexOf('X')

    if (firstIndex === -1) {
        return -1
    }

    const lastIndex = str2.lastIndexOf('X')

    return lastIndex - firstIndex
}

console.log(`Gap between the X's: ${getTheGapX(str2)}`)