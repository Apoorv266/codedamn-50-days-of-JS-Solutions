// Sure  -----> "How are you?"

// 'Whoa, chill out!' ----> YELL AT HIM (in all capitals)

//Calm down, I know what I'm doing!' ---> yell a question

// 'Fine. Be that way!' --->  address him without actually saying anything

// 'Whatever'  ---> to anything else


function hey(message) {
    let regex = /[A-Z]/g
    if (message.match(regex)) {
        console.log("true")
    }

}

console.log(hey("aaa"))