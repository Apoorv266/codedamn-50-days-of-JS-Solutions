let num = 99
let num2 = (Math.floor((num % 100) / 10) * 10).toString() // get tenth place
let num3 = (num % 10).toString() // one's place
let num4 = num.toString()

console.log(typeof num2, typeof num3, typeof num4)

const sayNumberInEnglish = (n, n2, n3) => {

    // we will create an array with numbers with values and match it with the user string
    // array keys are stored as strings  

    let array = [
        {
            0 : "zero",
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

    const keys = Object.entries(array[0]);
    // console.log(keys)

    for (const key in array[0]) {
        for (const key2 in array[1]) {
            for (const key3 in array[2]) {

                if (n === "0" && n2 === key) {
                    return `${array[0][n2]}` 
                }

                else if (n2 === key && n === key2 && n != "10" && n2 !== 
                "0") {
                    return `${array[1][key2]}-${array[0][key]}`
                }
                
                else if(n2 === "0" && n === key2){
                    return `${array[1][key2]}`
                }

                else if (n === key3 && n2 === key) {
                    return `${array[2][n3]}`
                }
            }
        }

    }
}

console.log(`${num} in english is: ${sayNumberInEnglish(num2, num3, num4)}`)


//..............Codedamn's solution..............

const parts = [
    [1e9, 'billion'],
    [1e6, 'million'],
    [1e3, 'thousand'],
    [100, 'hundred'],
    [90, 'ninety'],
    [80, 'eighty'],
    [70, 'seventy'],
    [60, 'sixty'],
    [50, 'fifty'],
    [40, 'forty'],
    [30, 'thirty'],
    [20, 'twenty'],
    [19, 'nineteen'],
    [18, 'eighteen'],
    [17, 'seventeen'],
    [16, 'sixteen'],
    [15, 'fifteen'],
    [14, 'fourteen'],
    [13, 'thirteen'],
    [12, 'twelve'],
    [11, 'eleven'],
    [10, 'ten'],
    [9, 'nine'],
    [8, 'eight'],
    [7, 'seven'],
    [6, 'six'],
    [5, 'five'],
    [4, 'four'],
    [3, 'three'],
    [2, 'two'],
    [1, 'one'],
    [0, 'zero']
  ]
  const floorDiv = (x, y) => Math.floor(x / y)
  const say = (n, prefix) => {
    const [part, name] = parts.filter(([part, name]) => part <= n)[0]
    const [high, low] = [floorDiv(n, part), n % part]
    const tailPrefix = part < 100 ? '-' : ' '
    const tail = low > 0 ? say(low, tailPrefix) : ''
    if (part < 100) return `${prefix}${name}${tail}`
    const head = say(high, prefix ? ' ' : '')
    return `${head} ${name}${tail}`
  }
  
  const sayNumberInEnglish2 = (n, prefix='') => {
    if (n < 0 || n >= 1e12) throw 'Number must be between 0 and 999,999,999,999.'
    return say(n, prefix)
  }
  
  
//   console.log(`1277834 in english is: ${sayNumberInEnglish2(98)}`)
  
  
