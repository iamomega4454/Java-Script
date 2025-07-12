// for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//    if (element ==5) {
//          console.log("5 is the best number");
//    }
//    else{
//      console.log(element);
//    }
// }



// nested for loop

// for (let i = 0; i <= 10; i++) {             // multiplication table
//    for (let j = 0; j <= 10; j++) {
//     console.log(`${j} x ${i} = ${i*j}`);
//    }  
// }


// using arrays
let Dc=["flash","Batman","Superman","Wondewomen"]
for (let i = 0; i < Dc.length; i++) { // we cannot use <=  ans:(orginal ans) and undefined 
    const element = Dc[i];
    console.log(element);
}
// flash
// Batman
// Superman
// Wondewomen


// beak and continue
for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("5 detected");
        break;
    }
    console.log(`value of i is ${i}`);
}
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 detected


for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log("5 detected");
        continue
    }
    console.log(`value of i is ${i}`);
}
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 detected
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10


//forof
const arr = [1,2,3,4,5]

for (const num of arr) {    // simple way of printing arrays******************
    console.log(num);
}

const greetings = "Hello world"         // for string***************************
    if(greetings.includes(" ")){
        for (const greet of greetings) {
            console.log(`Each char is ${greet}`);
        }
    }
    else{
        console.log("enter a valid greeting");
    }


//maps**********************************
// it is an object which removes duplicated values and printe in order of input given
const map=new Map();
map.set('ind',"INDIA")
map.set('fr',"FRANCE")
map.set('USA',"AMMERICA")
map.set('Ind',"INDIA")    // will not print

console.log(map);
// Map(4) {
//   'ind' => 'INDIA',
//   'fr' => 'FRANCE',
//   'USA' => 'AMMERICA',
//   'Ind' => 'INDIA'
// }

// using for loop 

for (const key of map) {
    console.log(key);        
}
// [ 'ind', 'INDIA' ]
// [ 'fr', 'FRANCE' ]
// [ 'USA', 'AMMERICA' ]
// [ 'Ind', 'INDIA' ]

for (const [key,value] of map) {//******************************************************* */
    console.log(key,'-:',value);        // to remove [     ]
}
// ind -: INDIA
// fr -: FRANCE
// USA -: AMMERICA
// Ind -: INDIA

const my