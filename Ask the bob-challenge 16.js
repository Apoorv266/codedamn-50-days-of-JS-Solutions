// Sure  -----> "How are you?"

// 'Whoa, chill out!' ----> YELL AT HIM (in all capitals)

//Calm down, I know what I'm doing!' ---> yell a question

// 'Fine. Be that way!' --->  address him without actually saying anything

// 'Whatever'  ---> to anything else


function hey(message) {
    let msg = message.split(" ").join("")
    let regex = /^[A-Z]/g
    let regex2 = /^[a-z]/g
    console.log(msg)


    if (message.charAt(message.length - 1) === '?' && regex.test(msg)) {
        return "Calm down, I know what I'm doing!"
    }

    else if ( regex2.test(msg) && message.charAt(message.length - 1) === '?') {
        return "Sure"
    }

    else if (regex.test(msg)) {
        return "Whoa, chill out!"
    }

    else if (message === "") {
        return "Fine. Be that way!"
    }

    else {
        return "Whatever !"
    }
}


console.log(hey("IUHRWGR SWGI"))



//........................Codedamn's solution.......................................

const isUpper = (string) => {
    return !/[a-z]/.test(string) && /[A-Z]/.test(string)
}

function hey(message) {
    // Code here
    let pureLetterString = ""
    message.split("").forEach(character => { 
        
        // we have split the "message" letter by letter and stored in an array...now we have looped over each character of the "message" using foreach....now if the characters matches with [a-zA-Z] they are added to pureLetterString as string

        // now this pureLetterString string goes into "inUpper" function where it returns the statement (!/[a-z]/.test(string) && /[A-Z]/.test(string)) which is further used in if statement
        if (/[a-zA-Z]/.test(character)) {
            pureLetterString += character
            console.log(pureLetterString)
        }
    })

    // console.log(pureLetterString)

    if (isUpper(pureLetterString) && message.trim().charAt(message.length - 1) === '?') {
        return "Calm down, I know what I'm doing!"
    }
    else if (isUpper(pureLetterString)) {
        return "Whoa, chill out!"
    }
    else if (message.trim().charAt(message.length - 1) === '?') {
        return "Sure."
    }
    else if (message === "") {
        return "Fine. Be that way!"
    }

    return "Whatever."
}

console.log(hey('how are you?'))