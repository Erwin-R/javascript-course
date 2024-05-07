//Type Coercion (changing one datatype to another)
//0 is false and 1 is true
console.log(0 == false) //0 == 0
console.log(0 == true)
console.log("0" == false)
console.log("0" == true)
console.log("1" == 1)


// === without Type Coercion
console.log("Without Type Coercion")
console.log(0 === false) //Here the number is not equal to a boolean
console.log(0 === true)
console.log("0" === false)
console.log("0" === true)
console.log("1" === 1) //Here string is not equal to a number