// var - function scoped, hoisted
console.log(x);    // undefined (hoisted)
var x = 10;
var x = 20;         // Redeclare OK

// let - block scoped
let y = 10;
// let y = 20;      // Error: already declared
y = 20;             // Reassign OK
if (true) {
  let y = 99;       // Different variable (block scope)
  console.log(y);   // 99
}
console.log(y);     // 20

// const - block scoped, no reassign
const PI = 3.14159;
// PI = 3.14;       // Error: Assignment to constant

// const with objects (properties CAN change)
const user = { name: 'Alice' };
user.name = 'Bob';  // OK - modifying property
// user = {};       // Error - reassigning variable

// Scope comparison
function demo() {
  if (true) {
    var a = 1;    // function scope - accessible outside if
    let b = 2;    // block scope - only inside if
    const c = 3; // block scope - only inside if
  }
  console.log(a);  // 1
  //console.log(b); // Error: b is not defined
}
console.log(a);
demo();