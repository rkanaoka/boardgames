module.exports = function(app) {
	
	var api = app.api.mecanica;

	app.route('/v1/mecanicas')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/mecanicas/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};