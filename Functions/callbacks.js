//Callbacks : functions that are passed as arguments to another function
const greetUser= (username, callback) => {
    if(callback){
        console.log(callback(username));
    }
    else{
        console.log(username)
    }
}

const cb = (username) => {
    return "Hello " + username;
}

greetUser("james", cb)

//Runs else condition
greetUser("james")


//Inline Version
greetUser("Jamila", (u) => {
    return "Hello " + u;
})

greetUser("Jamila")