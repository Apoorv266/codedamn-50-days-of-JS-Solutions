// find longest consecutive sequence


let arr = [34, 543, 34, 23, 32, 42, 0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 12, 13, 14, 15]

let arr2 = new Set(arr)
let arr3 = Array.from(arr2).sort(function (a, b) { return a - b });
console.log(arr3)

const longestConsecutiveSequence = (inputArray) => {

    // console.log(inputArray[0])
    // console.log(inputArray[0 - 1])  
    // console.log(inputArray[0 + 1] - 1)


    let arrnew = []
    for (let i = 0; i < inputArray.length; i++) {

        if ((inputArray[i - 1]) == undefined && inputArray[i] == (inputArray[i + 1] - 1)) {
            arrnew.push(inputArray[i])
        }

        else if ((inputArray[i - 1] + 1) == inputArray[i] && inputArray[i] == (inputArray[i + 1] - 1)) {
            arrnew.push(inputArray[i])
        }

        else if ((inputArray[i - 1] + 1) !== inputArray[i] && inputArray[i] == (inputArray[i + 1] - 1)) {
            arrnew.push(inputArray[i])
        }


        else if ((inputArray[i - 1] + 1) == inputArray[i] && inputArray[i] !== (inputArray[i + 1] - 1)) {
            arrnew.push(inputArray[i])
        }
    }
    console.log(arrnew)

    let arr2 = []

    for (let j = 0; j < arrnew.length; j++) {
        if (arrnew[j + 1] - 1 === arrnew[j]) {
            arr2.push(arrnew[j])
        }
    }

    console.log(arr2)


}

longestConsecutiveSequence(arr3)


    // sort arrange the digits in array in ascending order we use arr.sort()
// to arrange digits in array in ascending order we use arr.sort().reverse()


//.....................................................................................


