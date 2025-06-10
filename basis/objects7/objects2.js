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

// merge 2 onjests
const obj1={a:1, b:2, c:3, d:4}
const obj2={e:5, f:6, g:7, h:8}
const obj3={i:9, j:10, k:11, l:12}
 const oob=Object.assign({},obj1,obj2,obj3)   // using assign we can merge 2 or more objects
 console.log(oob);                              // here target is {} and source is obj1,obj2,obj3
// {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12
// }

// or use spread operator(...)
const oob1={...obj1,...obj2,...obj3}    //normally we use this****************************************
console.log(oob1);

// in database thre is array of objects 
const users=[
    {id:1 ,
     email:"amalkurian@gmail.com"},
     {id:2 ,
     email:"maraiaroyce@gmail.com"},
     {id:3 ,
     email:"ahyamrocks@gmail.com"}
]

// use this to access values
console.log(users[1].email);    //maraiaroyce@gmail.com ************************

// ************give as arrays********************
console.log(tinderuser);
console.log(Object.keys(tinderuser));   // it will give keys in the object as arrays 
//[ 'id', 'name', 'islogedin' ]

console.log(Object.values(tinderuser)); // it will give values of the object as arrays 
//[ '123abc', 'rakav', false ]

console.log(Object.entries(tinderuser));    // gives both values and keys in the object as arrays 
// [ [ 'id', '123abc' ], [ 'name', 'rakav' ], [ 'islogedin', false ] ]


// to know the key is present or not
console.log(tinderuser.hasOwnProperty("name")); // true means the key is present
//true
