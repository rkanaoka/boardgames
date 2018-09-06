class JogosController {

    constructor() {
        this._listaJogos = new ListaJogos();
        this._jogosView = new JogosView($("#jogos-view"));
        this.carregaLista(this._jogosView);
    }

    carregaLista(view) {
        let lista = this._listaJogos;
        $.get("/v1/jogos", function(data){
            $(data).each(function() {        
                let jogo = new Jogo(this._id, this.titulo, this.imgUrl);
                lista.adiciona(jogo);        
            });
        }).then(function(){
            view.update(lista);
        });
    }

    atualiza() {
        this._jogosView.update(this._listaJogos);
    }

    gravaNovoJogo(event) {
        console.log("Grevei");
    }

}