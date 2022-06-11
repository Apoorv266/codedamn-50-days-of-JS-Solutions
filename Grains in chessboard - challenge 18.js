
let int = 0
let x = window.prompt("find number of grains on square no : ")

if(x <= 64){
for (let i = 1; i <= x; i++) {
    if (int === 0) {
     int = 1
    }
    else {
        int = int + int
    }
}
console.log(BigInt(`${int}`))
}

else{
alert("Number should be less than equal to 64")
}
