class JogosController {

    constructor() {
        this._listaJogos = new ListaJogos();
        this._jogosView = new JogosView($("#jogos-view"));
        this.carregaLista();
    }

    carregaLista() {
        $.get("/v1/jogos", data => {
            console.log(data);
            data.forEach(jogo => {
                this._listaJogos.adiciona(new Jogo(jogo._id,jogo.titulo,jogo.img));
            });
        }).then(() => {
            this._jogosView.update(this._listaJogos);
        });
    }

    atualiza() {
        this._jogosView.update(this._listaJogos);
    }

    gravaNovoJogo() {
        var jogo = {
            titulo:$("#txt-titulo").val(),
            img:$("#txt-imagem").val()
        }
        $.post("/v1/jogos", jogo, data => {
            this._listaJogos.adiciona(new Jogo(data._id,data.titulo,data.img));        
        }).then(() => {
            this._jogosView.update(this._listaJogos);
        });
    }

    removeJogo(id) {
        $.ajax({
            method: "DELETE",
            url: `/v1/jogos/${id}`
        }).done(()=>{
            this._listaJogos.remove(id);
            this._jogosView.update(this._listaJogos);
        });
    }

}