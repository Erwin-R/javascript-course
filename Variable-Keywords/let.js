//Let

//with the let keyword, the variables are not hoisted to the top and we get an error when it reads line 9

for(let i = 0; i <= 10; i++){
    console.log(i);
}

console.log("value of i outside loop " + i);