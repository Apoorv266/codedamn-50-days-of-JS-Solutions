let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let arrNew = Array.from(iterable)
    const letters = new Set(iterable);
    let arr = Array.from(letters)
    console.log(arr)
  
    arrNew.map((item) => {
        if (arrNew.includes(item) === false) {
            arr.push(item)
        }
    })
    console.log(arrNew)
};
  

uniqueInOrder('AABBCCAA')