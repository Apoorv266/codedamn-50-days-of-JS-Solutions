// const array = [
//     { field: "id", operator: "eq" },
//     { field: "cStatus", operator: "eq" },
//     { field: "money", operator: "eq" },
// ];

// const filterField = "money"
// // console.log(array[1].field)

// function removeArrayElement(array) {
//     for(let key in array.field) {
//         // for in loop iterates over all the values of key "field"
//         console.log(key)
//     }
// }

// console.log(`filtered array: ${removeArrayElement(filterField)}`)


//.........................Codedamn's solution.....................

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {

    return array.filter(function (obj) {
            return obj.field !== filterField;
        });
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)