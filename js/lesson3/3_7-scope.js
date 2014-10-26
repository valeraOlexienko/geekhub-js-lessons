console.info('Скоуп по функции');

var x = 1;

function test1() {
    var x = 2;
}

console.log('test1');
test1();

console.log('x: ' + x);

console.log('if (true)');
if (true) {
    var x = 2;
}

console.log('x: ' + x);

console.log('for');
for (var i = 0; i < 10; i++) {
    var x = i;
}

console.log('x: ' + x);

function test2() {
    for (var i = 0; i < 10; i++) {
        var x = i;
    }
}

console.log('x = 1');
x = 1;

console.log('test2');
test2();

console.log('x: ' + x);

console.info('Как реально работает конструкция var');

console.log('firstName: ' + firstName);

var firstName = 'Sergii';

console.log('firstName: ' + firstName);

console.log('lastName: ' + lastName);