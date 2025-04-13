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
console.log(myDetails); //object

const MyFunction = function(){
    console.log("Hello world");
};
console.log(MyFunction); //function
//function printing
console.log( typeof MyFunction); //function

//**************************************************************************** */