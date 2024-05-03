
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true, 
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};

console.log(person);
console.log(person.firstName);
console.log(person.age);
console.log(person.address);
console.log(person.address.city);
//Prints the object values into an array
console.log(Object.values(person));
//Prints the object keys into an array
console.log(Object.keys(person));

//Prints the object into a string
console.log(JSON.stringify(person))