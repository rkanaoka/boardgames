var mongoose = require('mongoose');

var schema = mongoose.Schema({

	nome: {
		type: String,
		required: true
	},
	descricao: [String]
});

mongoose.model('Mecanica', schema);


