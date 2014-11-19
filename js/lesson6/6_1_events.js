/*
 * Bubble events
 */
//Calling from attribute
function divClick(element) {
    console.log('--> id: ' + element.className);
}

//onclick property
//var divs = document.getElementsByTagName('div');
//for (var i = 0; i < divs.length; i++) {
//    divs[i].onclick = function (event) {
//        var target = event.target || event.srcElement;
//
//        console.log("--> target = " + target.className + ", this=" + this.className);
//    }
//}

/*
 * Event Capture
 */
//eventListener | event capturing
//var divs = document.getElementsByTagName('div');
//for (var i = 0; i < divs.length; i++) {
//    divs[i].addEventListener("click", function (event) {
//        var target = event.target || event.srcElement;
//
//        console.log("--> target = " + target.className + ", this=" + this.className);
//    }, true)
//}

/*
 * jQuery
 */
//$(document).ready(function () {
//    $('#link').click(function (event) {
//        console.log('--> link clicked');
//    });
//
//    $('div').on('click', function (event) {
//        var target = event.target || event.srcElement;
//        console.log("--> target = " + target.className + ", this=" + this.className);
//    });
//
//    $('body').contextmenu(function (event){
//        event.preventDefault();
//    });
//});

