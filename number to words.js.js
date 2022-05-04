let num = "98"
let num2 = Math.floor((num % 100) / 10)
let num3 = num % 10
// console.log(num2, num3)

const sayNumberInEnglish = (n, n2) => {
    let array = [
        {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten"
        },

        {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninty",
            10: "hundred"
        }
    ]

    // 
    // console.log(Object.keys(array[0]).length)
    // console.log(n)
    // console.log(n2)
    // array[0].hasOwnProperty(key) &&

    // console.log(array[1][9])


    const keys = Object.keys(array[0]);
    console.log(keys)

    for (const key in array[0]) {
        for (const key2 in array[1]) {
            if (n === key && n2 === key2) {
                return `${array[1][key2]}-${array[0][key]}`;
            }
        }
    }
}

console.log(`${num} in english is: ${sayNumberInEnglish(num2, num3)}`)
