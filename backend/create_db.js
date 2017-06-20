var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

con.connect(function (err) {
    console.log("Conectando para criação do banco!");
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE carrosbd", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});