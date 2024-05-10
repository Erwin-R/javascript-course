//Promises

console.log("synchronous 1")

const promises = new Promise((resolve, reject) => {

    //resolves promise immediately
    //in this case the code will run asynchronously and will run both console.logs and then the promise
    return Promise.resolve().then(() =>{
        let i = 0;
        while(i < 1_000_000_000){i++}
        resolve("data back from the server")
    })

    //can appear to be asynchronous however most of the load is taken by the for loop iterating through a big number 
    //so in this case it might take a while to run the console log of synchronous 2 at the bottom because it is bottlenecked by the loop in the promise which makes it appear 
    //asynchronous but it actually not
    // let i = 0;
    // while(i < 1_000_000_000){i++}

    //the resolve line below is the actual asynchronous part
    // resolve("data back from the server")
    
});

// const promises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve is when the code works properly
//         resolve("data back from the server")
//     }, 3000)

//     setTimeout(() => {
//         //reject is when code fails
//         reject("failed to get data from server")
//     }, 2000)
// });

promises.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
    //finally will run regardless or whether response was successful or not (finally is optional)
}).finally(() => {
    console.log("done")
})

console.log("synchronous 2")
