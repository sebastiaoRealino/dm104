var express = require('express');
var app = express();

var db = require('./db');



url_pattern = '/api/v1/'

var db = require('./db');
app.get('/save', function (req, res) {
    var post = { name: 'me', gender: 'M', user_type: 'SELLER' };
    db.query('INSERT INTO users SET ?', post, function (err, result) {
        if (err) throw err;
        else {
            console.log(result.insertId);
            res.send('Carro salvo com sucesso!');
        }
    });
});

app.get(url_pattern + 'cars', function (req, res) {
    res.send('listagem de carros');
});

app.get(url_pattern + 'users', function (req, res) {
    db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });    
});


var server = app.listen(8000);
console.log('Servidor Express iniciado na porta %s', server.address().port);