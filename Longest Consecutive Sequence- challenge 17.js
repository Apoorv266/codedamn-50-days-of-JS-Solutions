// find longest consecutive sequence
 
 
 let arr = [1,3,7,2,5,8,4,6,0,1,1,3]

 let arr2 = new Set(arr)
let arr3 = Array.from(arr2).sort()


 const longestConsecutiveSequence = (inputArray) => {

     for (let i = 0; i < inputArray.length; i++) {
      let arr = []
      if ( inputArray[i -1] === [inputArray[i]] === [inputArray[i + 1]])
      arr.push[inputArray[i]]
    }
    console.log(arr)
    
    }

    console.log(longestConsecutiveSequence(arr3))  // console


    // sort arrange the digits in array in ascending order we use arr.sort()
// to arrange digits in array in ascending order we use arr.sort().reverse()
    
