//created the package.json and put "'type': 'module'" so we dont have to use "require" keyword and can just use imports
//const axios = require('axios').default; 

import axios from 'axios';

// axios.get("https://api.chucknorris.io/jokes/random")
//     .then(res => {
//         console.log(res.data)
//     }).catch(err => {
//         console.log(err)
//     })


//much better syntax then one above^
const fetchJoke = async (url) => {
    try {
        const res = await axios.get(url)
        console.log(res.data)

    } catch (error) {
        console.log(error)
    }
}

fetchJoke("https://api.chucknorris.io/jokes/random")