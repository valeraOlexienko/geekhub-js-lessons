(function(){

    var numbers = [1, 2, 3, 4];

    // ====== forEach =====

    numbers.forEach(function (x) {
        console.log(x);
    });

    //--------

    for (var i = 0; i < numbers.length; i++) {
        console.log(x);
    }

    // ====== map =========

    var strings = numbers.map(function (x) {
        return 'Number: ' + x;
    });

    console.log(strings);

    //--------

    strings = [];

    for (i = 0; i < numbers.length; i++) {
        strings.push('Number: ' + numbers[i]);
    }

    // ====== filter ======

    var onlyEven = numbers.filter(function (x) {
        return x % 2 === 0;
    });

    console.log(onlyEven);

    //-------

    onlyEven = [];

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            onlyEven.push(numbers[i]);
        }
    }

    // ====== reduce ======

    var sum = numbers.reduce(function (a, b) {
        return a + b;
    });

    console.log(sum);

    //------

    sum = 0;

    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

})();