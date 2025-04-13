// primitive -> 7types
// String , Number, Boolean, null, BigInt,undefined, Symbol
const score = 135
const scoreval = 167.45    // Number
const isLoggedin = false   //Boolean 
const temp = null   //object
let useremail; //undefined 
let BigNum =76545678987654567n //BigInt
const id = Symbol('147')           // both are having different value
const anotherid = Symbol('147') 
console.log(id == anotherid);   //    checking -> false
//**************************************************************************** */

// nonprinitive  (reference)->3types
// Array, Objects, Functions

const heros = ["Batman","Superman","Wonderwomen","Flash","Aquaman"]     //array
console.log(heros); //array printing
console.log(typeof heros); //object

let myDetails = {
    name : "Amal",
    age : 22 
};
console.log(myDetails); //object printing);

const MyFunction = function(){
    console.log("Hello world");
};
MyFunction()        //printing the content of function
console.log( typeof MyFunction); //function
//**************************************************************************** */

// 2 types of memmory -> stack and heap
// stack -> primitive data types
// heap -> non primitive data types

// stack*******************8
let a = 5;
let b = a;  //copying the value of a to b                   
console.log(a); //5
console.log(b); //5
b = 10; //changing the value of b
console.log(a); //5
console.log(b); //10


// heap*******************8
let gpayDetails = {
    name : "Amal",
    upi : "Amal243@okhdfc"
};
let gpayDetails1 = gpayDetails.name; //copying the reference of gpayDetails to gpayDetails1
console.log(gpayDetails); //object printing
console.log(gpayDetails1); //object printing
gpayDetails1.name = "dominic";
console.log(gpayDetails); //object printing
console.log(gpayDetails1); //object printing);
// here the the value of gpayDetails1 is changed but the value of gpayDetails is not changed
// this is because the value of gpayDetails1 is copied to gpayDetails and not the reference
// so the value of gpayDetails is not changed