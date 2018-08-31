class JogosController {

    constructor() {
        this._listaJogos = new ListaJogos();
        this.carregaLista();
        this._jogosView = new JogosView($("#jogos-view"));
        this._jogosView.update(this._listaJogos);
    }

    carregaLista() {
        var lista = this._listaJogos;
        $.get("/v1/jogos", function(data){
            $(data).each(function() {        
                let jogo = new Jogo(this._id, this.titulo, this.imgUrl);
                lista.adiciona(jogo);        
            });
            return lista;
        });
    }

    atualiza() {
        this._jogosView.update(this._listaJogos);
    }

}