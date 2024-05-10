const customers = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while(i < 2_000_000_000) i++
        resolve([
            {name: "Jamila", id: 1},
            {name: "Bob", id: 2}
        ])
    })
});

const addresses = new Promise((resolve, reject) => {
    reject("oops error")
    return Promise.resolve().then(() => {
        let i = 0; 
        while(i < 2_000_000_000) i++
        resolve([
            {customerId: 1, address: "London"},
            {customerId: 2, address: "USA"}
        ])
    })
});

//this is without async await(as we can see it is really messy)
// const fetchData = () => {
//     //if successfully fetched customers then get addresses
//     customers.then(c => {
//         //console.log if fetching addresses is successful otherwise catch error
//         addresses.then(a => {
//             console.log(c)
//             console.log(a)
//         }).catch(err => {
//             console.log(err)
//         })
//     //catching error is fetching customers fail
//     }).catch(err => {
//         console.log(err)
//     })
// }

//as we can see async promises allow us to make multiple promises without entering callback hell like above^
const fetchData = async() => {
    //to catch errors we surround the code in a try and catch block
    try{
        //this line will block until we have c/customers back. Once we have customers it will move onto the next line
        const c = await customers
        //this line will block until we have a/addresses back. Once we have addresses it will move onto the next line
        const a = await addresses
        console.log(c)
        console.log(a)
    } catch(error){
        console.log(error)
    }
}

fetchData()