//Arguments
var multiParamsFunction = function () {
    if (arguments.length == 2 && typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
        return arguments[0] + arguments[1];
    } else if (arguments.length == 1) {
        if (typeof arguments[0] == 'string') {
            return arguments[0].split('').reverse().join('');
        }
    } else {
        return 0;
    }
};

console.log(multiParamsFunction(1, 2));
console.log(multiParamsFunction('valera'));
console.log(multiParamsFunction());