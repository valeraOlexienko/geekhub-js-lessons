console.info('Функция в составе объекта');

var obj = {
    num: 1,
    func: function () {
        console.log('obj.func');
        console.log(this);
    }
};

obj.func();

console.info('Функция сама по себе');

var funcStandalone = function () {
    console.log('funcStandalone');
    console.log(this);
};

funcStandalone();

console.info('Функция вызвана через call или apply');

console.log('obj.func.call');
obj.func.call();
console.log('obj.func.apply');
obj.func.apply();

console.log('funcStandalone.call');
funcStandalone.call(obj);
console.log('funcStandalone.apply');
funcStandalone.apply(obj);

console.info('Навсегда связана с одним  this через bind');

var func2 = funcStandalone.bind(obj);

console.log('func2');
func2();
console.log('func2.call');
func2.call();
console.log('func2.apply');
func2.apply([1,2,3]);

console.info('this - всегда объект');

funcStandalone.call();
funcStandalone.call(null);
funcStandalone.call(1);
funcStandalone.call('asd');
funcStandalone.call(true);
funcStandalone.call(func2);