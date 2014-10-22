//region ====================== 2.6.1 Способы создания ===================================

// 2.6.1.1 Фигурные скобки

var obj1 = {
    // 2.6.1.1.1 Допустимые имена полей

    // 2.6.1.1.1.1 Без кавычек
    _: 1,
    $: 1,
    abc: 1,

    // 2.6.1.1.1.2 С кавычками
    "@": 1,
    "": 1,
    'abc': 1
};

console.log(obj1);

// 2.6.1.2 Оператор new

var obj2 = new Object();

console.log(obj2);

// 2.6.1.2 Просто вызов конструктора Object()

var obj3 = Object();

console.log(obj3);

//endregion

//region ====================== 2.6.2 Преобразование в строку, метод toString() ===========

// 2.6.2 Преобразование в строку, метод toString()

var num = 1,
    str = "text",
    bool = true,
    obj = {},
    arr = [1,2,3];

function func() {
    alert('test')
}

console.log('num: ' + num.toString());
console.log('str: ' + str.toString());
console.log('bool: ' + bool.toString());
console.log('obj: ' + obj.toString());
console.log('arr: ' + arr.toString());
console.log('func: ' + func.toString());

console.log(num + ' test');
console.log(bool + ' test');
console.log(obj + ' test');
console.log(func + ' test');

// what about null and undefined?

obj.toString = function () {
    return 'Sergii!';
};

console.log('obj: ' + obj.toString());

console.log(obj + ' test');

//endregion

//region ====================== 2.6.3 Способы обращения к полям объекта =================



//endregion