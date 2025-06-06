
// singleton
    //Object.create     constructor


//object literals
const mysymbol = Symbol("ke1") // creating symbol(not included in objects )
const jsuser = {                     
name: "amal",
"full name": "amal kurian royce",
age: 22,
locality: "kalaketty",
email: "amalkurian@gmail.com",
[mysymbol]: "key1"                    // without [] type would be string(due to "")
}       

// for accessing objects we use***** objectname.[varible] or use .(exeption is there)*******
console.log(jsuser);
console.log(jsuser["full name"]);   // amal kurian royce    (. cannot be used)
console.log(jsuser["age"]);     //22
console.log(jsuser.name);    //amal       (. can be used)
console.log(jsuser[mysymbol]);  //key1   //for accessing symbol we dont use ""(. cannot be used) *********************


jsuser.email= "amalkurian@google.com" // for changing value in objects
console.log(jsuser["email"]);       //amalkurian@google.com

Object.freeze(jsuser);      //freezing object
jsuser.name="dominic"
console.log(jsuser["name"]);       //amal  new value didnt change

// using functions

// jsuser.greeting = function(){
//     console.log("hello js user");
// }
// console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`hello js user,${this["full name"]}`);
    
}
console.log(jsuser.greetingtwo());



