const course = {
    coursename:"js",
    courseid:"3321",
    coursefees:"1000",
    courseinstructor:"amal"
}
// we cas access key value using course.coursename
// but if we want to access lot of values we use more simple syntaxes
const {courseinstructor}=course     //***************************************************
console.log(courseinstructor);
//amal

// destructuring of objects
const {courseinstructor:instructor}=course  // structure of courseinstructor changed into instructor
console.log(instructor);
//amal

//API's
// api has objects which is in json format (which looks like objects but not have object name and keys are also in string format)
// eg:

// {
//  "coursename":"js",
//  "courseid":"3321",
// "coursefees":"1000",
// "courseinstructor":"amal"   
// }

// some are in array which has group of objects
//eg:

// [
//     {},
//     {},
//     {},
// ]


