let num = "10"
let num2 = (Math.floor((num % 100) / 10) * 10).toString()
let num3 = (num % 10).toString()
let num4 = num.toString()
// console.log(typeof num2, typeof num3)

const sayNumberInEnglish = (n, n2, n3) => {
    // we will create an array with numbers with values and match it with the user string
    // array keys are stored as strings 
    let array = [
        {
            0: "",
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
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninty",
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
            18: "eightteen",
            19: "nintien"
        }
    ]


    // console.log(Object.keys(array[0]).length)
    console.log("ten's place :", n)
    console.log("one's place :", n2)
    console.log("exceptionals :", n3)
    

    const keys = Object.keys(array[0]);
    // console.log(keys)

    for (const key in array[0]) {
        for (const key2 in array[1]) {
            for (const key3 in array[2]) {
                if (n2 === key && n === key2) {
                    return `${array[1][key2]}-${array[0][key]}`;
                }

                else if (n3 === key3){
                    return `${array[3][key3]}`;
                }
            
            }
        }

    }
}

console.log(`${num} in english is: ${sayNumberInEnglish(num2, num3, num4)}`)
