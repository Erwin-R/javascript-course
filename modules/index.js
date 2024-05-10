//can name import whatever we want, in this case it is "brand". No curly brackets for default export and curly bracket for regular named exports
// can also rename named exports 
import 
    brand,
    // {add, subtract, BRAND as b}
    //another way to export all named exports without having to type each one explicitly. Exporting all the named exports as "Lib"
    * as lib
from './lib.js'

console.log(brand)
console.log(lib.brand)
// console.log(add(10, 10))
// console.log(subtract(10, 10))
console.log(lib.add(10, 10))
console.log(lib.subtract(10, 10))