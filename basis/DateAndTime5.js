let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
// Wed Jun 04 2025 17:41:52 GMT+0000 (Coordinated Universal Time)
// 6/4/2025
// 6/4/2025, 5:41:52 PM
// 6:08:19 PM

let mydates=new Date(2023,0,14);        // 1/14/2023, 12:00:00 AM
console.log(mydates.toLocaleString());
let mydatess=new Date(2023,1,14);        // 2/14/2023, 12:00:00 AM
console.log(mydatess.toLocaleString());

let mydates1=new Date("01-14-2003");        // 1/14/2003, 12:00:00 AM
console.log(mydates1.toLocaleString());

let timestamp=Date.now();
console.log(timestamp); // 1749061201626  date timestamp of today

console.log(mydates1.getTime());        // 1042502400000  (to get timestamp {milli second} with respect to date given)

console.log(Math.round(Date.now()/1000));   // devide by 1000 to get millisecond to second (timestamp) and get it round
console.log(Math.round(mydates1/1000));   // devide by 1000 to get millisecond to second (timestamp) and get it round

let newdate=new Date();
console.log(newdate.getDay());
console.log(`today's date is ${newdate.toLocaleDateString()} and the time is ${newdate.toLocaleTimeString()}`);


console.log(newdate.toLocaleString('default',{
    weekday : "long",

    
}));












let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
// Wed Jun 04 2025 17:41:52 GMT+0000 (Coordinated Universal Time)
// 6/4/2025
// 6/4/2025, 5:41:52 PM
// 6:08:19 PM

let mydates=new Date(2023,0,14);        // 1/14/2023, 12:00:00 AM
console.log(mydates.toLocaleString());
let mydatess=new Date(2023,1,14);        // 2/14/2023, 12:00:00 AM
console.log(mydatess.toLocaleString());

let mydates1=new Date("01-14-2003");        // 1/14/2003, 12:00:00 AM
console.log(mydates1.toLocaleString());

let timestamp=Date.now();
console.log(timestamp); // 1749061201626  date timestamp of today

console.log(mydates1.getTime());        // 1042502400000  (to get timestamp {milli second} with respect to date given)

console.log(Math.round(Date.now()/1000));   // devide by 1000 to get millisecond to second (timestamp) and get it round
console.log(Math.round(mydates1/1000));   // devide by 1000 to get millisecond to second (timestamp) and get it round

let newdate=new Date();
console.log(newdate.getDay());
console.log(`today's date is ${newdate.toLocaleDateString()} and the time is ${newdate.toLocaleTimeString()}`);


console.log(newdate.toLocaleString('default',{
    weekday : "long",

    
}));












