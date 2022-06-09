// find longest consecutive sequence


let arr = [1, 2, 3, 5, 6, 7]

let arr2 = new Set(arr)
let arr3 = Array.from(arr2).sort(function (a, b) { return a - b });
// console.log(arr3)

const longestConsecutiveSequence = (inputArray) => {

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
    // console.log(arrnew)


    let arr2 = []
    for (let i = 0; i < arrnew.length; i++) {

             if (arrnew[i] === 0) {
            arr2.push([arrnew[0]])
        }


        else if ( arrnew[i] != arrnew[i - 1] + 1 ) {
            arr2.push([arrnew[i]])
        }
    }
    console.log(arr2)



    
    var result = []

    for (var i = 0; i < arrnew.length; i++) {
        if (arrnew[i] === 0) {
            result.push([arrnew[0]])
        }


        else if (arrnew[i] != arrnew[i - 1] + 1) {
            result.push([arrnew[i]])
        }
        

        else {
            tmp = result[result.length - 1]
            tmp.push(arrnew[i])
            result[result.length - 1] = tmp
        }
    }
    console.log(result)

    // console.log(result.length)
    // console.log(result)

}

longestConsecutiveSequence(arr3)


    // sort arrange the digits in array in ascending order we use arr.sort()
// to arrange digits in array in ascending order we use arr.sort().reverse()


//.....................................................................................


// let arr4 = [[1], [5] , [7]]
// console.log(arr4.length)
// console.log(arr4[arr4.length - 1])   // [7]