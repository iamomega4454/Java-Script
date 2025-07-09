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

