
let int = 0
let x = window.prompt("find number of grains on square no : ")
for (let i = 1; i <= x; i++) {
    if (int === 0) {
     int = 1
    }
    else {
        int = int + int
    }
}
console.log(int)
