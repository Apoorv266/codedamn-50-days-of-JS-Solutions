

const Colfun = (ColCase) => {
    let colObj = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    }

    for (const key in colObj) {
        if (ColCase === key) {
            console.log(colObj[key])
        }
    }

}

let col = "Blue"
let ColCase = col.toLowerCase()

Colfun(ColCase)