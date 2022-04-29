const str = "JavaScript is awesome"

reverseAString(str)

function reverseAString(str) {
    let reverse = str.split('str')
    let arr = ""
    for (let i = reverse[0].length; i > 0; i--) {
        arr+=(reverse[0].charAt(i));
    }
    console.log(arr.toString())
}

// console.log(`Reversed string is: ${reverseAString(JavaScript is awesome)}`)


//....................another way..........................


const str2 = "JavaScript is awesome";

function reverseAString(str) {
let t = str.split("").reverse().join("");
return t;
}

console.log(`Reversed string is: ${reverseAString(str2)}`)
