var express = require('express');
var app = express();

app.use(allowCrossDomain);

app.get('/ads', function (req, res) {
    setTimeout(function () {
        res.send('<li>One</li><li>Two</li><li>Three</li>');
    }, 3000);
});

app.get('/contacts', function (req, res) {
    setTimeout(function () {
        res.send('<li>Sergii</li><li>Valera</li>');
    }, 3000);
});

app.get('/mails', function (req, res) {
    setTimeout(function () {
        res.send('<li>Some message</li><li>Just a test</li><li>Something special</li>');
    }, 3000);
});

app.listen(3000);

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}