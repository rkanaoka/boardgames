var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
	imgUrl: {
		type: String,
		required: true
	}
});

mongoose.model('Jogo', schema);


