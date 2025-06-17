// if we use n number of arguments inside a function
// we use rest operator(...)
function calsulateprice(...num1){
    return num1
}
console.log(calsulateprice(200,500,600,800));   //[ 200, 500, 600, 800 ] in form of arrays

// if using object in function
const user={            
    username: "amal",
    id:274849
}
function emp(anyobject){        // can use any parameter but their values should be given using (.)**************************************
    console.log(`username is ${anyobject.username} and his id is ${anyobject.id}`);
}

emp(user)   //use object name as parameter
// username is amal and his id is 274849


 // or you can use object inside function
 function person({name, age}) {
  console.log(`Name: ${name}, Age: ${age}`);
}
person({ name: "Amal",
     age: 22
     });    //Name: Amal, Age: 22

// using arrays
const myarray = [100,200,300,400]
function secondnumber(val){ //setting a paarameter
    return val[1]
}
console.log(secondnumber(myarray)); //***********************
//200
