const myarray = [2,4,6,9]   // 1st way
console.log(myarray[0]);    //2

const myArray = ["batman","flash","superman"]  // batman
console.log(myArray[0]);


const MyArray = new Array("ironman","capatian ammerica","thor","black widow")
console.log(MyArray[3]);    // blackwidow

// methords

myarray.push(10);
console.log(myarray);   // add extra element            ********right

myarray.pop()
console.log(myarray);   // delete element at last

myarray.unshift(15)
console.log(myarray);   // add value to leftmost          *******left

myarray.shift()
console.log(myarray);   // delete value to the leftmost

MyArray.push("antman")          // also work in strings
console.log(MyArray);       

console.log(myarray.includes(9));       // true
console.log(myarray.indexOf(6));        // 2
console.log(myarray.indexOf(8));        // -1       not present in aray

const myarr= myarray.join()
console.log(myarr);     // converts array into string


console.log("A",myarray);           // A [ 2, 4, 6, 9 ]               ********slice(start, end)     
let myarr1=myarray.slice(0,3)
console.log(myarr1);                // [ 2, 4, 6 ]
console.log("Res A",myarray);       // Res A [ 2, 4, 6, 9 ]         final array


console.log("B",myarray);           // B [ 2, 4, 6, 9 ]              **********splice(start, deleteCount)
let myarr2=myarray.splice(0,3)
console.log(myarr2);                // [ 2, 4, 6 ]
console.log("Res B",myarray);       // Res B [ 9 ]     final array         ****delete from orginal array








