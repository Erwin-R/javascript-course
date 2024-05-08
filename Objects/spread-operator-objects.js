//Spread Operator on Objects
const jamila = {
    firstName: "Jamila",
    age: 21,
    isFemale: true, 
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    toString: function(){
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true
};

const address = {
    city: "London",
    postCode: "SW9"
}

const person = {
    firstName: jamila.firstName,
    address: {
        city: address.city,
        postCode: address.postCode
    }
};

//gathers all the properties from both objects
const person2 = {
    ...jamila,
    address: {...address}
};

console.log(person)
console.log()
console.log(person2)