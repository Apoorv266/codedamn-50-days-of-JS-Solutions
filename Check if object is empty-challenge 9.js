const obj = {key : 1};

function isEmpty(obj) {

    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
            break
    }
    return true;

}

console.log(`is empty object: ${isEmpty(obj)}`)


//..................Codedamn solution................

const obj2 = { key: 1 };
console.log(Object.entries(obj2))
// Object.entries create an array which contains the object items

function isEmpty(obj2) {
    return Object.entries(obj2).length === 0
    // now since the object is turned into array its length can be checked
    // return the array with object's key value pair and now array length can be calculated with the help of .length 
}

console.log(`is empty object: ${isEmpty(obj2)}`)


const obj3 = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(obj3.hasOwnProperty(10));  