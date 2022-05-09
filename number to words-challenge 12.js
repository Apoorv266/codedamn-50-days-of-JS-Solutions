let num = 20
let num2 = (Math.floor((num % 100) / 10) * 10).toString() // get tenth place
let num3 = (num % 10).toString() // one's place
let num4 = num.toString()
let num5 =  Math. floor(num / 100 % 10).toString()

console.log( num2,num3, num4, num5)

const sayNumberInEnglish = (n, n2, n3 ,n4) => {

    // we will create an array with numbers with values and match it with the user string
    // array keys are stored as strings  

    let array = [
        {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },

        {
            10: "ten",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        },

        {
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "ninteen"
        }
    ]


    // console.log(Object.keys(array[0]).length)
    console.log("ten's place n :", n)
    console.log("one's place n2:", n2)
    console.log("hundreds's place n4:", n4)

    const keys = Object.entries(array[0]);
    // console.log(keys)

    for (const key in array[0]) {
        for (const key2 in array[1]) {
            for (const key3 in array[2]) {

                if (n2 === key) {
                    return n === "0" ? `${array[0][key]} hundred ${array[0][n2]} ` : `${array[0][n2]}`
                }

                else if ( n2 === key && n === key2 && n != "10" && n2 !==
                    "0") {
                    return  n4 != 0 ? `${array[0][key]} hundred ${array[1][key2]}-${array[0][key]}` :   `${array[1][key2]}-${array[0][key]}`
                }

                else if ( n === key2) {
                    return n2 === "0" ? `${array[0][n4]} hundred ${array[1][n2]} ` : `${array[1][key2]}`
                }

                else if (n === key3 && n2 === key) {
                    return `${array[2][n3]}`
                }

            }
        }

    }
}

console.log(`${num} in english is: ${sayNumberInEnglish(num2, num3, num4 ,num5)}`)




