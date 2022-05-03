const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"
// console.log(array[1].field)

function removeArrayElement(array) {
    for(let key in array.field) {
        // for in loop iterates over all the values of key "field"
        console.log(key)
    }
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)


//.........................Codedamn's solution.....................

const array2 = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField2 = "money"

function removeArrayElement(filterField) {

    return array2.filter(function (obj) {
            return obj.field !== filterField2;
            // object whose key value is not equal to filterField2 that is "money" will added to the array2
        });
}

console.log(removeArrayElement(filterField2))
