var util = require('util');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('/index.html');
});

server.listen(8000, function(){
	console.log("testing this thing in the port 80 mf");
});