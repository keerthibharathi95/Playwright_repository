var data  //Redeclaration and reassignment allowed
var data = "10"

var data = 10;
var data = true;
console.log(data)
      //but in real time you should not reassign the value so we are not use var.
 
      //reassignment allowed but redeclaration not allowed
let sample;
//let sample;  returns compile time error
sample = "10";
sample = 820027740280200n;
console.log(sample);
//reassignment not allowed const
const pi = 3.14;
console.log(pi);