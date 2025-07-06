//  if(true){
//     //condition will execute
//  }

//  if (false) {
//     // condition will not execute
//  }

// = assign
// == equal
/// === will check type too
if (3==="3") {
    console.log("executed");    // will not execute because number not equal string
}

const temperature = 40

if (temperature<=50) {
    console.log("temperature is less than or = to 50");
    
}else{
    console.log("temperature is not less than or = to 50");
}

if (temperature===40) {
    console.log("temperature is = to 40");  // type is correct
    
}else{
    console.log("temperature is not = to 40");
}


//implicit scope (for single line ie.without "{}")but can be written multiple lines by using " , "

// use of else if
const bal=30
if (bal<20) {
    console.log("less than 20");
}else if (bal===20) {
    console.log("equal to 20");
}else{
    console.log("greater than 20");
}


const userloggin = true
const debitcard = true
const loggedinfromgoogle=false
const loggedinfromemali=true

if (userloggin && debitcard) {
    console.log('allow to buy course ');
    if (loggedinfromgoogle || loggedinfromemali) {
        console.log('welcome employee');
    }else{
        console.log('welcome guest user');
    }
}

// switch case
const month=3
switch (month) {
    case 1:                     // if string then    case "april"*********************
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 8:
        console.log("june");
        break;

    default:
        console.log('invalid month');
        break;
}






