module.exports = function(app) {
	
	var api = app.api.jogo;

	app.route('/v1/jogos')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/jogos/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};