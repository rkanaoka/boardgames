var mongoose = require('mongoose');

var schema = mongoose.Schema({

	nome: String,
	fotos: [String]

});

mongoose.model('Autor', schema);


