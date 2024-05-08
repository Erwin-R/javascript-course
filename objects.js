const person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true, 
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    },
    toString: function(){
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true
};

// adding new property to object
// person.lastName = "Ahmed";
//Same as the line above^ but in this way we can compute the last name
person["lastName"] = "Ahmed";


//delete a property 
// delete person.deleteMe
delete person["deleteMe"]

console.log(person.toString())
console.log(person)

//Looping through object

for (const p in person) {
    //Prints the keys
    console.log(p)
    //Prints the values
    console.log(person[p])
}

//array of keys
console.log(Object.keys(person))

//array of value of keys 
console.log(Object.values(person))