

const colorCode = (color) => {

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


    for (const key in colObj) {
        if (ColCase === key) {
            return colObj[key]
        }
    }

}

let col = "red"
let ColCase = col.charAt(0).toUpperCase() + col.substr(1)   // R + ed = Red


console.log(colorCode(ColCase))

//.....................................................................................
console.log("----------------------------")

const TEST_CASE_1 = 'blue'
const TEST_CASE_2 = 'white'

const colorCode2 = (color) => {
    const colorMap = new Map()        // creating a new map with name colorMap

    colorMap.set('Black', 0)         // setting items to new map colorMap
    colorMap.set('Brown', 1)
    colorMap.set('Red', 2)
    colorMap.set('Orange', 3)
    colorMap.set('Yellow', 4)
    colorMap.set('Green', 5)
    colorMap.set('Blue', 6)
    colorMap.set('Violet', 7)
    colorMap.set('Grey', 8)
    colorMap.set('White', 9)

    console.log(colorMap)                           // printing colorMap map
    console.log(color.charAt(0).toUpperCase())      // W
    console.log(color.substr(1))                    // hite
    console.log(color.charAt(0).toUpperCase() + color.substr(1))   // W + hite = White
    return colorMap.get(color.charAt(0).toUpperCase() + color.substr(1))  // Searching White in map "colorMap" and returning its value (White = 9)
}

console.log(colorCode2(TEST_CASE_1))
console.log(colorCode2(TEST_CASE_2))