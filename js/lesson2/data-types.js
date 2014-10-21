console.log('\n--- Data Types ---\n');

//String immutability
var x = "s1";
var y = x;
x = "s2";
console.log(y); //TODO Add excepted result as a comment with student's help

//Number values
var n = 1;
var m = n;
n = 10.2;
console.log(m); //TODO Add excepted result as a comment with student's help

//Boolean
var t = true;
var f = t;
t = false;
console.log(f); //TODO Add excepted result as a comment with student's help

//Object references
var o = {name: 'Valera'};
var b = o;
o.name = 'Sergei';
console.log(b.name); //TODO Add excepted result as a comment with student's help

//Functions
function myFunction(a) {
    return a + 10;
}
var myAwesomeFunction = function (a) {
    return a - 10;
};
console.log(myAwesomeFunction(myFunction(2))); //TODO Add excepted result as a comment with student's help

//Undefined | Null. Small intro about global difference
var myVariable;
console.log(myVariable); //TODO Add excepted result as a comment with student's help