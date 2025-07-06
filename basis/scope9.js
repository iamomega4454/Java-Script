//using var inside a scope and calling outside a scope will not occur error*************************************
// normaly scope is: {     }
let a=300           // global scope
var c=80
if(true){
    let a=10            //block scope(or local scope)ie: used in if, for loops etc
    constb=20
    // var c=40
    console.log("inner:",a);
    
}
console.log(a);
// inner: 10
// 300
console.log(c); // var cannot be used for block scope but car be used for global scope

//nested scope

function one(){
    const username="amal"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);   //not possible because it is outside two's scope
    two()
}
one()   //amal
// but two() is executing even if console.log(website); is commented
// if we commented two() alongside one() will not execute

// if used in if loop
if(true){
    const username="amal"
    if(username==="amal"){
        const website=" youtube"    
        console.log(username+website);  //amal youtube
    }
    // console.log(website);   // not possible
}
// console.log(username); // also not possible because username is initialized inside a scope

// ++++++++++++++++++++++++interesting+++++++++++++++++++++++++++

console.log(addone(5)); //6 ie:possible
function addone(num){
    return num+1
}


//  console.log(addtwo(5));//Cannot access 'addtwo' before initialization***************************
//  (hoisting)
const addtwo = function(num){   //also a function decleration in form of varibles
    return num+2
}