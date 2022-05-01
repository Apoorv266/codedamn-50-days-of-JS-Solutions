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

function isEmpty(obj2) {
    return Object.entries(obj2).length === 0
    
}

console.log(`is empty object: ${isEmpty(obj2)}`)


const obj3 = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(obj3.hasOwnProperty(10));  