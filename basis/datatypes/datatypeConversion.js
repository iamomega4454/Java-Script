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























