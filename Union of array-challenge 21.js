const unionOfArrays = (arr1, arr2) => {

    dup_arr = [...arr1]
    for (let i = 0; i < arr1.length; i++) {
        arr2.map((item) => {
            if (arr1.includes(item) === false) {
                dup_arr.push(item)
            }
        })
        return dup_arr;

    }


};

console.log(`The union is ${unionOfArrays(['a', 'b', 'c'], ['a', 1, 2, 'd'])}`);


//........................................................................


const unionOfArrays2 = (arr1, arr2) => {
    // code below here
    dup_arr = [...arr1]
    arr2.forEach((val) => {
        if (dup_arr.includes(val) === false) {
            dup_arr.push(val)
        }
    })
    return dup_arr;
};

console.log(`The union is ${unionOfArrays2(['a', 'b', 'c'], ['a', 1, 2, 'd'])}`);


