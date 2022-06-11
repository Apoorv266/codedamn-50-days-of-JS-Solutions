
let int = 0
for (let i = 0; i <= 64; i++) {
    if (int === 0) {
     int = 1
    }
    else {
        int = int + int
    }
    console.log(int)
}
