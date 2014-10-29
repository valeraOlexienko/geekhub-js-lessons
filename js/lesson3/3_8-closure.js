console.info('Простой пример');

var x = 1;

function changeXto(y) {
    x = y;
}

console.log('до: ' + x);

changeXto(2);

console.log('после: ' + x);

console.info('Сложный пример');

function createCounter() {
    var count = 0;

    return function () {
        return ++count;
    }
}

var counter1 = createCounter();

console.log('counter1');
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

var counter2 = createCounter();

console.log('counter2');
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

console.info('Самовызывающаяся функция - закрытый скоуп');

console.log('x = 1');
x = 1;
console.log('x: ' + x);

(function () {
    var x = 3;

    console.log('x внутри функции: ' + x);
})();

console.log('x: ' + x);