


//........................Solution 1.............................
// in this example we will check for the whites spaces rather than characters, if characters...counter will increase whenever white space is spotted and characters will be added to "a" till the time counter is less than wordLimit

// wordLimit is equal to number of white spaces

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3
console.log(str[10])  // this indicated the white spaces of the string

function truncateWithWordLimit(str, wordLimit) {
    let a = ''
    count = 0;
    i = 0;
    while (count < wordLimit && i < str.length) {
        a += str[i];
        i++;

        if (str[i] === ' ') {
            count++;
        }

    }
    return a
}
console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)


//......................Codedamn's solution..............................

const str2 = 'JavaScript is simple but not easy to master';
const wordLimit2 = 3

function truncateWithWordLimit(str2, wordLimit2) {
    // write your solution here

    return str2.split(' ').slice(0, wordLimit2).join(' ')
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit2)}`)

