/*Object Declaration
const object_name = {
   key1: value1,
   key2: value2
}*/
var student={
    firstName:"sivaji",
    lastName:null,
    class:10
}
// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object
//You can also define an object in a single line.
const person1 = { name: 'John', age: 20 };
//Accessing Object Properties
//1. Using dot Notation    [objectName.key]
const person2 = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person2.name); // John
//2. Using bracket Notation [objectName["propertyName"]]
const person3 = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person3["name"]); // John
