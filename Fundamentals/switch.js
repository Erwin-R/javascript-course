//Switch
var gender = "F";

if(gender == "M"){
    console.log("Male")
} else if(gender == "F" || gender == "Female"){
    console.log("Female")
} else{
    console.log("unknown")
}


//By default runs all cases so if you want it to stop after a case include a break 
switch(gender){
    case "M":
        console.log("Male")
        break;
    case "F":
        console.log("Female")
        break;
    default:
        console.log("Unknown")
}
