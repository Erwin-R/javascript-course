//Arrays Destructing
const names = [
    "James",
    "Mariam",
    "Jamal",
    "Aisha",
    "Alex"
];

// const james = names[0]
// const mariam = names[1]
// const jamal = names[2]
//Instead of this^ do this below
const [j, mariam, jamal, ...rest] = names;
console.log(j)
console.log(mariam)
console.log(jamal)
//can use spread to get rest of items in array
console.log(rest)