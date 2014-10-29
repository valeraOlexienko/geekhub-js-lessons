//this. basics
var o1 = {
    working: false,
    progress: 0,
    timeout: 0,

    start: function (progress, timeout) {
        this.progress = progress;
        this.timeout = timeout;
        this.working = true;
    },

    stop: function () {
        this.working = false;
    }
};
o1.start(10, 60);
o1.stop();
console.log(o1);

//region ------Call & Apply -------
//Apply
var o2 = {};
o1.start.apply(o2, [50, 10]);
o1.stop.apply(o2);
console.log(o2);

//Call
var o3 = {};
o1.start.call(o3, 50, 10);
console.log(o3);
//endregion