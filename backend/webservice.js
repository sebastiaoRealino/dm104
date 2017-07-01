var express = require('express');
var app = express();
var db = require('./db');
var url = require('url');
var bodyParser = require('body-parser');
var cors = require('cors')


app.use(cors())
url_pattern = '/api/v1/'

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var db = require('./db');
app.get('/save_user_fake', cors(), function (req, res) {
    var post = { name: 'me', gender: 'M', user_type: 'SELLER' };
    db.query('INSERT INTO users SET ?', post, function (err, result) {
        if (err) throw err;
        else {
            res.send('User fake salvo com sucesso!');
        }
    });
});
app.get('/save_car_fake', cors(), function (req, res) {
    var post = { model: '1998', color: 'red', price: '500', is_sold: false, sold_date: '1991-02-04' };
    db.query('INSERT INTO cars SET ?', post, function (err, result) {
        if (err) throw err;
        else {
            res.send('Carro fake salvo com sucesso!');
        }
    });
});
app.options(url_pattern + 'cars', cors());
app.get(url_pattern + 'cars', cors(), function (req, res) {
    try {
        var is_sold = JSON.parse(req.query.is_sold)
        if (is_sold == true) {
            var sql_to_get = "SELECT *FROM cars WHERE is_sold=true"
        } else if (is_sold == false) {
            var sql_to_get = "SELECT *FROM cars WHERE is_sold=false"
        }
    } catch (err) {
        var sql_to_get = "SELECT *FROM cars"
    }
    console.log(sql_to_get);
    db.query(sql_to_get, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

app.post(url_pattern + 'cars', cors(), function (req, res) {
    console.log(req.body);
    console.log('entrou aqui!')
    db.query('INSERT INTO cars SET ?', req.body, function (err, result) {
        if (err) throw err;
        else {
            res.send('Carro salvo com sucesso!');
        }
    });
});

app.options(url_pattern + 'cars/:id', cors());
app.put(url_pattern + 'cars/:id', cors(), function (req, res) {

    var car_id = req.params.id
    req.body.sold_date = new Date();
    var new_car = req.body;
    console.log(req.body);
    var params = [new_car, car_id];
    db.query('UPDATE cars SET ? WHERE id = ?', params, function (err, result) {
        if (err) throw err;
        else {
            res.send('Carro alterado com sucesso!');
        }
    });
});

app.delete(url_pattern + 'cars/:id', cors(), function (req, res) {

    var car_id = req.params.id
    var params = [car_id];
    db.query('DELETE FROM cars WHERE id = ?', params, function (err, result) {
        if (err) throw err;
        else {
            res.send('Carro alterado com sucesso!');
        }
    });
});

app.get(url_pattern + 'users', cors(), function (req, res) {
    db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


var server = app.listen(8000);
console.log('Servidor Express iniciado na porta %s', server.address().port);
