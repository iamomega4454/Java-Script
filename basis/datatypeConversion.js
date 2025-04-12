let num = "44"
console.log(typeof num) //string
console.log(typeof (num))   //string
let val = Number(num)   //type conversion
console.log(typeof val) //number

let num1 = "12abc" // if null ->0       // true->1 or false->0      string->NaN          if undefined ->NaN                
let val1 = Number(num1) //convertedd to type number
console.log(val1)   //shows NaN because there is also alphebets

let istr = 1        //number        
let istrue = Boolean(istr)
console.log(istrue)     //true      if string->false


let num2 = 44
let val2 = String(num2)
console.log(typeof val2)
console.log(val2)   //value will be 44 but it would be string 

//**********************************OPERATIONS**************************************

let value = 3
let negval = -value
console.log(negval);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2%2);
console.log(2/2);

let str1 = "hello"
let str2 = " boy"
let str3 = str1+str2
console.log(str3);  //combine 2 words

console.log(2 + 3); //5
console.log("2" + 3);  //23 
console.log("2" + "3"); //23
console.log("2" + 4 + 3);   //243
console.log(2 + 4 + "3");   //63


















