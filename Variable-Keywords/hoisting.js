//When the interpreter runs all the variables get hoisted to the top without being assigned a value until it reaches the line of code
//this is why we can access i when outside of the for loop
//var i;

for(var i = 0; i <= 10; i++){
    console.log(i);
}

console.log("value of i outside loop " + i);