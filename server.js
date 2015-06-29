var express = require('express');
var path = require('path');
var app = express();
require('./config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
	console.log('Now you see me on: 8000!');
});