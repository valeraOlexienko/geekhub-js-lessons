console.log('\n--- Type casting ---\n');

//With functions
var x = 1;
console.log(x.toString());

var s = '0.25';
console.log(parseFloat(s));
console.log(parseInt(s));

//With constructors
var f = 'false';
console.log(Boolean(f)); // Which strings will be converted to true value?

var a = 1;
console.log(String(a));
console.log(Boolean(a));
console.log(Number(s)); // Notice! we using s variable, not a

//With operators
var str = ' ';
console.log(!!str);
console.log(+str);
console.log(+s);

var c = 1;
console.log(c + '');
