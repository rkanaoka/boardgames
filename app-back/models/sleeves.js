var mongoose = require('mongoose');

var schema = mongoose.Schema({

	dimensoes: String,
	alias: String
});

mongoose.model('Sleeves', schema);


