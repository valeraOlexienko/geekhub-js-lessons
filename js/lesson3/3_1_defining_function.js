//Usual function definition
function summ(a, b, c) {
    var d = a + b + c;
    return d;
}
console.log(summ(1, 2, 3));

//Defining as function as a variable
var revert = function (str) {
    console.log(str.split("").reverse().join(""));
};
revert('valera');

//Named / anonymous function
var process = function (a, b, c, callback) {
    var d = summ(a, b, c);
    //Doing some huge work
    if (callback) callback(d);
};
process(10, 11, 12, function (d) {
    console.log(d);
});

//Function constructor
var concat = new Function('a', 'b', "console.log(a+b)");
concat('Ser', 'gii');

var concat2 = Function('a', 'b', "console.log(a+b)");
concat2('Ser', 'gii');
