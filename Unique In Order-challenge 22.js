let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let arrNew = Array.from(iterable)
    console.log(arrNew)

    console.log(typeof arrNew[6])
    console.log(typeof arrNew[6 + 1])

    let newArr = []
    for (let i = 0; i < arrNew.length; i++) {
        if (arrNew[i] === arrNew[i + 1]) {    
            newArr.push(arrNew[i])
        }
    }
    console.log(newArr)
};


uniqueInOrder('ABBCcAD')


// let a = [1, 2, 3]
// console.log(indexOf)