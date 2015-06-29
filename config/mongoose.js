// requiring mongoose to interact with mongodb and fs to interact with files
var mongoose = require('mongoose');
var fs = require('fs');
// establishes connection to DB
mongoose.connect('mongodb://localhost/Full_Friends');
// assigns the folder path to variable for easier use later in function
var models_path = __dirname + '/../server/models'
// goes through models folder to look for every .js file for use in DB functions
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
});