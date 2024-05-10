//this variable can be other datatypes such as an object, number, etc.
const BRAND = "Amigoscode"

//can have as many named exports as we want
// export const add = (a, b) => a + b
// export const subtract = (a, b) => a - b

//can also export like this
const add = (a, b) => a + b
const subtract = (a, b) => a - b

export{
    add, 
    subtract,
    BRAND as brand
}


//can only have 1 export default for any given file
export default BRAND;