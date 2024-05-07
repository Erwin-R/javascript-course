//Functions
// function getBrand(brand){
//     console.log(brand)

//     return {
//         brand: brand,
//         website: `www.${brand}.com`
//     }
// }

//Should write functions out like this 
const getBrand = function(brand){
    return {
        brand: brand,
        website: `www.${brand}.com`
    }
}


const brand = getBrand("Nike");
console.log(brand);
console.log(JSON.stringify(brand, null, 1))