let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let arrNew = Array.from(iterable)
    console.log(arrNew)
   
    let newArr = []
    for (let i = 0; i < arrNew.length; i++) {
     if (arrNew[i] != arrNew[(i + 1)]) {
        newArr.push(arrNew[i])
     }
    }
    console.log(newArr)
};
  

uniqueInOrder([1,2,2,3,3])