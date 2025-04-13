const name = "Amal"
const age = 25
console.log(`My name is ${name} and I am ${age} years old.`);   //string interpolation

const gameName = new String("Call of Duty");
console.log(gameName.length)    // 12
console.log(gameName.charAt(0))  // C
console.log(gameName.charAt(1))  // a
console.log(gameName.charAt(4)) // space

console.log(gameName.toLocaleUpperCase());  // CALL OF DUTY //but doesnot modify the original string

console.log(gameName.indexOf("D")); //8

let newstr = gameName.substring(0 , 7);
console.log(newstr); // Call of

let revstring= gameName.split("").reverse().join("")    //first split the string into an array of characters,
                                                    //then reverse the array and finally join it back into a string 
console.log(revstring);// ytuD fo llaC

const str = " you are not brave ";
let str1=str.trim();
console.log(str1); //you are not brave
console.log(str1.replace("you", "men").replace("not",""));  //men are  brave

console.log(str.includes("brave")); //true 
console.log(str.startsWith("men")); //false

console.log(str.concat(name));// you are not brave Amal

const str2 = "*";
console.log(str2.repeat(5));    // *****






