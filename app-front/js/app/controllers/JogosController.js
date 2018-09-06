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

    gravaNovoJogo() {
        var jogo = {
            titulo:$("#txt-titulo").val(),
            imgUrl:$("#txt-imagem").val()
        }
        var lista = this._listaJogos;
        var view = this._jogosView;
        $.post("/v1/jogos", jogo, function(data){
            let jogo = new Jogo(data._id,data.titulo,data.imgUrl);
            lista.adiciona(jogo);        
        }).then(function(){
            view.update(lista);
        });
    }

    removeJogo(event) {
        var jogo = $(event.target).parent();
        var id = jogo.attr("id")
        $.ajax({
            method: "DELETE",
            url: `/v1/jogos/${id}`
        }).done(function(){
            jogo.remove();
        });
    }

}