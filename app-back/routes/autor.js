module.exports = function(app) {
	
	var api = app.api.autor;

	app.route('/v1/autores')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/autores/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};