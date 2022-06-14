

const Colfun = (ColCase) => {

    let colObj = {
        Black: 0,
        Brown: 1,
        Red: 2,
        Orange: 3,
        Yellow: 4,
        Green: 5,
        Blue: 6,
        Violet: 7,
        Grey: 8,
        White: 9,
    }

    for (const iterator in colObj) {
        // if (ColCase === iterator) {
            console.log(iterator)
        // }
    }

}

let col = "Brown"
let ColCase = col.toLowerCase()

Colfun()