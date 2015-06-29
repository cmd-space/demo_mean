var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

require('./config/mongoose.js');
app.use(bodyParser.json());
require('./config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
	console.log('Now you see me on: 8000!');
});