//Functions
//can ommit parenthesis since it's only one parameter
const getBrand = brand => {
    return {
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
}


//if function automatically returns something you can also write it like this
//need the parenthesis around the curly brackets since we are immediately returning an object
const getBrand2 = brand => ({
        brand: brand,
        website: `www.${brand}.com`
    }
)


const add = (a, b) => a + b;
const calculate = (a, b, sign) => {
    switch(sign){
        case "+":
            return a + b
        case "-":
            return a + b
        default:
            //throw error 
    }
};

const brand = getBrand("Nike");
console.log(JSON.stringify(brand, null, 1))