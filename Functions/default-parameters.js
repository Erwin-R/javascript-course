//Function Default Parameter
//setting default value of the paremeter to "Hello"
const getBrand = (brand = "Hello") => {
    return {
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
}

const brand = getBrand("Samsung");
console.log(JSON.stringify(brand, null, 1))


//if no parameter is passed then it will used the default we gave it in the function 
const brand2 = getBrand();
console.log(JSON.stringify(brand2, null, 1))


//Can also pass a second default parameter just like this
const getBrand2 = (brand = "Hello", a = {"key": "value"}) => {
    return {
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`,
        secondParameter: a
    }
}

const brand3 = getBrand2("Kick");
console.log(JSON.stringify(brand3, null, 1))
