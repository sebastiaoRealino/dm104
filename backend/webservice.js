var express = require('express');
var app = express();

var db = require('./db');



url_pattern = '/api/v1/'

var db = require('./db');
app.get('/save', function (req, res) {
    var post = { id:'2', name: 'me', gender: 'M', user_type: 'SELLER' };
    db.query('INSERT INTO users SET ?', post, function (err, result) {
        if (err) throw err;
        else {
            res.send('Carro salvo com sucesso!');
        }
    });
});

app.get(url_pattern, function (req, res) {
    res.send('api para carros!');
});

app.get(url_pattern + 'cars', function (req, res) {
    res.send('listagem de carros');
});

app.get(url_pattern + 'users', function (req, res) {
    res.send('listagem de usuários');
});


var server = app.listen(8000);
console.log('Servidor Express iniciado na porta %s', server.address().port);