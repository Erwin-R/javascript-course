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

const fetchData = async() => {
    //Promise.all takes an array of promises (returns a promise)
    // Promise.all([customers, addresses]).then(values => {
    //     console.log(values)
    Promise.all([customers, addresses]).then(values => {
        const[c, a] = values;
        console.log(c);
        console.log(a)
    }).catch(err => {
        console.log(err)
    })
}

fetchData()