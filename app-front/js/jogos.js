

function carregaListaJogos() {
    $.get("/v1/jogos", function(data){
        $(data).each(function() {
            adicionaJogoNaLista(this._id, this.titulo, this.imgUrl);            
        });
    });
}

function adicionaJogoNaLista(id, titulo,imgUrl) {
    var btnEditar = $("<a>").attr("href","#").addClass("waves-effect waves-light btn").text("Editar");
    var btnRemover = $("<a>").attr("href","#").addClass("waves-effect waves-light btn").text("Remover");
    btnRemover.click(removeJogoDaLista);

    var cardImage = $("<div>").addClass("card-image")
            .append($("<img>").attr("src",imgUrl))            
    var cardContent = $("<div>").addClass("card-content")
            .append($("<span>").addClass("card-title").text(titulo))
            .append($("p").text("Descrição do jogo"));
    var cardAction = $("<div>").addClass("card-action ")
            .append(btnEditar)
            .append(btnRemover);   

    
    var card =  $("<div>").attr("id",id).addClass("col s12 m6 l4 xl3").append(
                        $("<div>").addClass("card")
                            .append(cardImage)
                            .append(cardContent)
                            .append(cardAction)
                    );

    $("#painel-jogos").append(card);
}

function gravaNovoJogo() {
    var eTitulo = $('#txt-titulo');
    var eImg = $('#txt-imagem');
    $.post("/v1/jogos", {
        titulo: eTitulo.val(),
        imgUrl: eImg.val()
    }, function(data){
        adicionaJogoNaLista(data._id,data.titulo,data.imgUrl);
        eTitulo.val("");
        eImg.val("");
    })
    .fail( error => console.log("falhou: " + error));
}

function removeJogoDaLista(event) {
    event.preventDefault();
    var item = $(this).parent().parent().parent();
    var id = item.attr("id");
    $.ajax({
        url: `/v1/jogos/${id}`,
        type: 'DELETE',
        success: function(){
            item.fadeOut(1000);
            setTimeout(function(){
            item.remove();
            }, 1000);
        },
        error: function() {
            console.log("falhou feio, falhou rude");
        }
    });
    
}