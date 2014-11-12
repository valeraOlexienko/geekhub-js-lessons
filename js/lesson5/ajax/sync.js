setTimeout(function () {

    var ads = syncAjax('/ads');
    document.getElementById('ads').innerHTML = ads;

    var contacts = syncAjax('/contacts');
    document.getElementById('contacts').innerHTML = contacts;

    var mails = syncAjax('/mails');
    document.getElementById('mails').innerHTML = mails;


    function syncAjax(url) {
        var response = $.ajax({
            type: "GET",
            url: 'http://localhost:3000' + url,
            async: false
        });

        return response.responseText;
    }

}, 1000);