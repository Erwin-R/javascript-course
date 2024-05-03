//const (does not allow reassignment of variable)
const brand = "Amigoscode";

//can append values to object, but cannot reassign type (i.e object to string/num/boolean etc.)
const brandObject = {};
brandObject["brand"] = brand;
delete brandObject.brand;
// brand = {};
// brand = 10;
console.log(brand);
console.log(brandObject);