//Arrays
const numbers = [1, 2, 3, 4, 5];


//Three ways to write the same thing
//1
numbers.forEach(function(number){
    console.log(number)
})
//2
numbers.forEach(number => {
    console.log(number)
})
//3
numbers.forEach(number => console.log(number));

console.log(numbers[3])
numbers[3] = 44
console.log(numbers[3])
numbers.push(60)
console.log(numbers)

const indexOfFive = numbers.indexOf(5)
console.log(indexOfFive)
//start index, number of elements to delete
numbers.splice(indexOfFive, 1)
console.log(numbers)


//map allows you to perform transformations on the elements of array/loop itself 
numbers.map(number => {
    return number * 2
})

//since return statement is just one line can write like this
const numberTimesTwo = numbers.map(number => number * 2)
console.log(numberTimesTwo)