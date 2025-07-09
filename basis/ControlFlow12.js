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

// Nulish coalescing operator (??):null undefined ***************************
let val1;
//  val1=5 ?? 10    //5
// val1=null ?? 15     // 15        used to check in database usually insted of 15 we use a complex function*****************************
 val1=undefined ?? 20    //20
console.log(val1);  

//ternary operator(?)************************************
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80");
//more than 80



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
        console.log('invalid month');       //march
        break;
}


// truthy or falsey values
const userEmail="a@mal.ai"      // if userEmail=[]  ans:got email

if (userEmail) {                // if userEmail=""  ans:invalid email
    console.log("got email");
    
} else {
    console.log("invalid email");
}


// falsy values*********************************************************
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values   any value inside a string**************************************
// "0",'false'," ",[],{},function(){}

// to check arrays
const arr=[]    

if (arr.length===0) {               
    console.log("array is empty");
    
} else {
    console.log("array is not empty");
}       //array is empty

// check for object
const obj={}        // empty object

if (Object.keys(obj).length===0) {   //*********************************************** */            
    console.log("object is empty");
    
} else {
    console.log("object is not empty");
}  //object is empty