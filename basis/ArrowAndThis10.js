// using this keyword(only be used inside an object or object enclosed function)***********************
// if used inside a function without object ans will be undefined
const user={
    username :"amal",
    price:234,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);// it can access 
        console.log(this);//if print this inside a function 
        // blelow a function is involked so every thing inside the function will be printed 
    }

}
user.welcomeMessage() // access the function inside an object and console.log(this); will be printed****************************************
// //amal,welcome to website
// {
//   username: 'amal',
//   price: 234,
//   welcomeMessage: [Function: welcomeMessage]
// }
user.username="dom"
 user.welcomeMessage() //dom,welcome to website


 console.log(this); // if put this outside scope then ans will be {}

//  +++++++++++++++++++++arrow function+++++++++++++++==
// for using arrow function we remove (function)
const chai=()=>{
    let username="amal"
    console.log(this.usernameusername);   
}
 chai() //undefined
 

 const chaii=()=>{   
    let username="amal"
    console.log(this);   // if remove .username
}
 chaii()    //{}

 // basic use of arrow function***************

 const addtwo=(num1,num2)=>{    // used like function (but remove function)
    return num1+num2
 }
 console.log(addtwo(2,5));  //7

 // or use implicit return
 
 const addtwoo=(num1,num2)=> num1+num2
 
 console.log(addtwoo(2,5));// 7

//  or use paranthisis the we need not use return(used in react)************************
 const add2=(num1,num2)=> (num1+num2)
 
 console.log(add2(2,5));// 7

//  ie: explicit return is use of return CSSLayerStatementRule
// but implicit return is use of () insted of return statement
