module.exports = function(app) {
	
	var api = app.api.sleeves;

	app.route('/v1/sleeves')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/sleeves/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};