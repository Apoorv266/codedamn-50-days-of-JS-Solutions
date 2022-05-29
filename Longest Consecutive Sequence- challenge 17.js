// find longest consecutive sequence


let arr = [100, 4, 200, 1, 3, 2]

let arr2 = new Set(arr)
let arr3 = Array.from(arr2).sort(function (a, b) { return a - b });
console.log(arr3[2 - 1] - 1)

// const longestConsecutiveSequence = (inputArray) => {

//     for (let i = 0; i < inputArray.length; i++) {
//         if ((inputArray[i - 1] + 1) == inputArray[i] && inputArray[i] == (inputArray[i + 1] - 1)) {
//               console.log(inputArray[i])
//         }
//     }
// }

// longestConsecutiveSequence(arr3)


    // sort arrange the digits in array in ascending order we use arr.sort()
// to arrange digits in array in ascending order we use arr.sort().reverse()

