//Loops
var names = ["Alex", "Jamila", "Joe", "Aisha"];

console.log("for i");

for(var i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log();
console.log("for of");

for (const name of names) {
    console.log(name);
}


console.log();
console.log("for each");
names.forEach(function(name) {
    console.log(name);
})