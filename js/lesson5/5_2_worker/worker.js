this.addEventListener('message', function(e) {
    var x = 1;
    while(x < 10000000000) {
        x++;
    }
    this.postMessage('x: ' + x);

}, false);