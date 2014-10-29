(function () {
    var selects = document.querySelectorAll('select');

    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener('change', changeLocation);
    }

    if (location.hash) {
        var script = document.createElement('script');
        script.src = 'js/' + location.hash.slice(1);
        document.body.appendChild(script);
    }

    function changeLocation() {
        location.hash = this.getAttribute('data-lesson') + '/' + this.value;
        location.reload();
    }
})();