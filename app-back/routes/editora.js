module.exports = function(app) {
	
	var api = app.api.editora;

	app.route('/v1/editoras')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/editoras/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};