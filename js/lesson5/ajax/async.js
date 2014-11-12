(function () {

    asyncAjax('/ads', function (ads) {
        document.getElementById('ads').innerHTML = ads;
    });

    asyncAjax('/contacts', function (contacts) {
        document.getElementById('contacts').innerHTML = contacts;
    });

    asyncAjax('/mails', function (mails) {
        document.getElementById('mails').innerHTML = mails;
    });


    function asyncAjax(url, callback) {
        var response = $.ajax({
            type: "GET",
            url: 'http://localhost:3000' + url,
            success: callback
        });
    }

})();