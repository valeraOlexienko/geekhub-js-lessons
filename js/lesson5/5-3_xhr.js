(function () {

    // ========= XMLHttpRequest ==========

    var xhrSync = new XMLHttpRequest();
    xhrSync.open('GET', 'http://localhost:3000/mails', false);
    xhrSync.send(null);
    if(xhrSync.status == 200) {
        console.log(xhrSync.responseText);
    }

    var xhrAsync = new XMLHttpRequest();
    xhrAsync.open('GET', 'http://localhost:3000/mails', true); // << true вместо false
    xhrAsync.onreadystatechange = function() {
        if (xhrAsync.readyState == 4 && xhrAsync.status == 200) {
            console.log(xhrAsync.responseText);
        }
    };
    xhrAsync.send(null);

    // =========== jQuery =================

    jQuery.ajax({
        type: 'GET',
        url: 'http://localhost:3000/mails',
        success: function (result) {
            console.log(result);
        }
    });

    jQuery.get('http://localhost:3000/mails', function (result) {
        console.log(result);
    });

})();