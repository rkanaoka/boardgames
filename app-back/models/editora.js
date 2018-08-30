var mongoose = require('mongoose');

var schema = mongoose.Schema({

	nome: String,
	pais: String,
	uf: String
	
});

mongoose.model('Editora', schema);


