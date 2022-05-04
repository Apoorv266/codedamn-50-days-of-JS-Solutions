let num = 2

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
            9 : "nine"
        }
    ]
    
    console.log(array[0])

    for (let i = 0; i < array.length; i++) {
        if (n === 2) {
            return array[1]
        }
    }
}

console.log(`${num} in english is: ${sayNumberInEnglish(num)}`)
