//Immediately Invoked Function Expression (IIFE)
 function chai(){
    console.log('db connected');
 }
chai();// if using other ()() functuion it should end with ;******************

//Immediately Invoked Function Expression (IIFE)
//sometimes global scope mey cause pollution to solve this we use ()()
 (function chaii(){
    console.log('db connected');
 })();   //db connected
// first () is function definition and second () is function execution

// using arrow function
( ()=>{
   console.log("database my_god is connected");
})(); //database my_god is connected

// *********************************************************************
( (name)=>{                                      // just like normal function 
   console.log(`database ${name} is connected`);
})('BadAss');  //database BadAss is connected


// this parameterized function expression(FE)
  //here (name)=>{ same as  function chai(name){
//and ('BadAss'); same as chai(BadAss);