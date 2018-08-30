var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Autor');

	api.lista = function(req, res) {

		model.find()
		.then(function(autores) {
			res.json(autores);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.buscaPorId = function(req, res) {

		model.findById(req.params.id)
		.then(function(autor) {
			if (!autor) throw new Error('Foto não encontrada');
			res.json(autor);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.removePorId = function(req, res) {

		model.remove({'_id' : req.params.id})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.adiciona = function(req, res) {

		model.create(req.body)
		.then(function(autor) {
			res.json(autor);
		}, function(error) {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.atualiza = function(req, res) {

		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(autor) {
			res.json(autor);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	return api;
};

