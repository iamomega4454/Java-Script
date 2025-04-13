console.log("2" > 1);   //true
console.log(2 > 1); //true
console.log("02" > 1);  //true

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
        // there is difference in equality(==) and comparison(>= or <=) operator
        // comparison treats null as a number that is to 0
        // but equality doesnot 
console.log("2" == 2)   //true due lack of check in datatype conversion
console.log("2" === 2); // false due to strict check (check datatype conversion)






