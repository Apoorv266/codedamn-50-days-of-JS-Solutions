// find longest consecutive sequence
 
 
 let arr = [0,3,7,2,5,8,4,6,0,1,1,3]
// removing the duplicates by using set()
 let arr2 = new Set(arr)

let arr3 = Array.from(arr2)

 console.log(arr3)
 const longestConsecutiveSequence = (inputArray) => {

  for (let i = 0; i < inputArray.length; i++) {
      const element = inputArray[i];
      console.log(element)
  }
     
    }

    console.log(longestConsecutiveSequence(arr2))  // console


    // sort arrange the digits in array in ascending order we use arr.sort()
// to arrange digits in array in ascending order we use arr.sort().reverse()
    
