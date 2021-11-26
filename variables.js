// variables to move data around
// variable is an empty box that have a label (course) assigned a value (shecodes)
let course = "SheCodes";
// to access the entry in course
console.log(course); //SheCodes is returned

// variables can be text or numbers , arrays etc.. 

let version = 10;
// numbers dont need quotes

// variables cannot contain a space in them - rather follow a camel case / - syntax! 

let tool = "VS Code";

// concatenation
console.log(course + tool)
// SheCodesVS Code

// to ass a space you need to explicity define it
console.log (course+ " " + tool);
// SheCodes VS Code

console.log (version +20);
//30

// cannot create another varibale with the same name! 
let course = "SheCodes+";


// you can reassign course with "SheCodes+" value (because this is a let/var declaration ; const declarations cannot be reassigned a value!) ! 
course = "SheCodes+" //this updates course from SheCodes to SheCodes+ here on

