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
    return Promise.resolve().then(() => {
        let i = 0; 
        while(i < 2_000_000_000) i++
        resolve([
            {customerId: 1, address: "London"},
            {customerId: 2, address: "USA"}
        ])
    })
});

// const fetchData = async() => {
//     //Promise.all takes an array of promises (returns a promise)
//     // Promise.all([customers, addresses]).then(values => {
//     //     console.log(values)
//     Promise.all([customers, addresses]).then(values => {
//         const[c, a] = values;
//         console.log(c);
//         console.log(a)
//     }).catch(err => {
//         console.log(err)
//     })
// }


const fetchData = async() => {
    try{
        //can also use Promise.all when there is no dependency between two variables, in this case, it would be customers and addresses
        // const c = await customers
        // const a = await addresses
        //in this case now these two promises will be run in parallel, which speeds up our code
        const values = await Promise.all([customers, addresses])
        const[c, a] = values;
        console.log(c)
        console.log(a)
    } catch(error){
        console.log(error)
    }
}

fetchData()