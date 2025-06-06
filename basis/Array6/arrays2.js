const marval = ["ironman","captian ammerica","thor","spiderman"]
const dc = ["batman","superman","wonderwomen","aquaman"]
// dc.push(marval);

console.log(dc);
/*
[
  'batman',
  'superman',
  'wonderwomen',
  'aquaman',                                                      not a good methord                                          
  [ 'ironman', 'captian ammerica', 'thor', 'spiderman' ]
]
  */

// insted use concat
const allheros = marval.concat(dc);             
console.log(allheros);
/*[
  'ironman',
  'captian ammerica',
  'thor',
  'spiderman',
  'batman',
  'superman',
  'wonderwomen',
  'aquaman'
]*/

// but we use spread operator(...)
// we can  merge 2 arrays using concaat but using ... operator we can merge 2 or more arrays***********

const someheros = ["flash","cyborg","antman","blackwidow"]

const AllHeros = [...marval,...dc,...someheros]     // merging 3 arrays***********************
console.log(AllHeros);
 /*
[
  'ironman',
  'captian ammerica',
  'thor',
  'spiderman',
  'batman',
  'superman',
  'wonderwomen',
  'aquaman',
  'flash',
  'cyborg',
  'antman',
  'blackwidow'
]
 */

const another_array=[1,2,3,[4,5,6],7,8,[9,10,11],12,[13,14,15]]
const real_another_array = another_array.flat(Infinity) 
// to make all sub arrays into one array(use infinity if there is n sub arrays)*********
console.log(real_another_array);
// [
//    1,  2,  3,  4,  5,  6,
//    7,  8,  9, 10, 11, 12,
//   13, 14, 15
// ]

console.log(Array.isArray("amal")); //false
console.log(Array.from("amal"));    // [ 'a', 'm', 'a', 'l' ]********
console.log(Array.from({name : "amal"}));   // []    it will give empty Array

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));    // [ 100, 200, 300 ]   merge multiple values into an array*********




