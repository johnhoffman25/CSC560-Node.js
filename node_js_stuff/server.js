//John Hoffman - F00555643
//CSC 560
//Assignment 1 - Intro To RESTful API
//10/26/2021

var express = require('express');
var app = express();
var fs = require("fs");

var user = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id" : 4
	}
}

var id = 2;

app.post('/addUser', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.delete('/deleteUser', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		delete data["user" + id];
		console.log(data);
		res.end(JSON.stringify(data));
    });
})

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/:id', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		var users = JSON.parse(data);
		var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})