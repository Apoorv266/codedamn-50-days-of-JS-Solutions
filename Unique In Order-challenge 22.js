let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let arrNew = Array.from(iterable)
    console.log(arrNew)
 
    console.log(typeof arrNew[6])   
    console.log(typeof arrNew[6 + 1])   
      
    let newArr = [] 
    for (let i = 0; i < arrNew.length; i++) {
        if (arrNew[i] !== arrNew[i + 1]) { 
            // if current element is not equal to its next element in type and value , it will get filtered to new array
            
            // here we are checking value as well as type, for last element the type of arrNew[i] is string where as type of arrNew[i + 1] would be undefined so arrNew[i] will be pushed to array
            newArr.push(arrNew[i])
        }
    }
    console.log(newArr)
};


uniqueInOrder('ABBCcAD')


//...................................Codedamn's solution.................................


let uniqueInOrder2 = (iterable) => {
    //your code here - remember iterable can be a string or an array
  
    return [...iterable].filter((a, i) => a !== iterable[i-1])   // a is the value of current element and i is the index of current element-----if current element is not equal to its previous element in type and value , it will get filtered to new array
  };