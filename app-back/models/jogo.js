var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
	autores_id: [Number],
	ilustradores_id: [Number],
	editoras_id: [Number],
	mecanicas_id: [Number],
	descricao: String,
	componentes: String,
	sleeves: [{sleeve_id: Number, qtd: Number}],
	ano: Number,
	minJogadores: Number,
	maxJogadores: Number,
	minTempo: Number,
	maxTempo: Number,
	dimensoes: [Number],
	peso: Number,
	imagens: [String],
	img: String	
});

mongoose.model('Jogo', schema);


