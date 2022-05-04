let num = "30"

const sayNumberInEnglish = (n) => {
    let array = [
        {
            1 : "one",
            2 : "two",
            3 : "three",
            4 : "four",
            5 : "five",
            6 : "six" ,
            7 : "seven",
            8 : "eight",
            9 : "nine",
            10: "ten"
        },

        {
            20 : "twenty",
            30 : "thirty",
            40 : "forty",
            50 : "fifty",
            60 : "sixty",
            70 : "seventy" ,
            80 : "eighty",
            90 : "ninty",
            100 : "hundred"
        }
    ]
    
    // console.log(Object.keys(array[0]).length)

    const keys = Object.keys(array[0]);
    console.log(keys)

    for (const key in array[1]) {
        if (array[1].hasOwnProperty(key) && n === key) {
            return `${array[1][key]}`;
        }
    }
}

console.log(`${num} in english is: ${sayNumberInEnglish(num)}`)
