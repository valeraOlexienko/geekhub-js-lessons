//Synchronous code problem
var x = 1;
while(x < 100000000) {
    x++;
}
console.log(x);

//Worker (HTML5) solution
/*
var worker = new Worker('js/lesson5/5_2_worker/worker.js');
worker.addEventListener('message', callback, false);

function start() {
    worker.postMessage({'cmd': 'start'});
}

function callback(e) {
    console.log(e.data);
}
*/

//Timeout
/*var x = 1;
setTimeout(function () {
    while(x < 1000000000) {
        x++;
    }
    callback(x);
}, 1);
console.log(x);

function callback(x) {
    console.log(x);
}*/

//Interval
/*
var x = 1;
var interval = setInterval(function () {
    x++;
    if (x == 1000) {
        console.log(x);
        clearInterval(interval);
    }
}, 1);
console.log(x);
*/

