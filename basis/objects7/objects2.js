const tinderuser = {}   // empty object
tinderuser.id="123abc";
tinderuser.name="rakav"
tinderuser.islogedin=false

console.log(tinderuser);        // { id: '123abc', name: 'rakav', islogedin: false }

const emp_details={
    email: "amalkurian@gmail.com",
    name: {                                 // nested objects
        fullname: {
            firstname: "Amal",
            lastname: "kurian"
        }
    },
    locality: "plassanal"
}
console.log(emp_details.name.fullname.firstname);       // Amal

