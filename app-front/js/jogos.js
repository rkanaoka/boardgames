

function carregaListaJogos() {
    $.get("http://localhost:3000/v1/jogos", function(data){
        $(data).each(function() {
            var item = adicionaJogoNaLista(this.titulo,this.imgUrl);            
            $("#lista-jogos").append(item);
        });
    });
}

function adicionaJogoNaLista(titulo,imgUrl) {
    var elItem = $("<li>");
    var elTitulo = $("<h2>").text(titulo);
    var elImg = $("<img>").attr("src",imgUrl);

    var elBtnRemover = $("<a>").attr("href","#").addClass("botao-remover waves-effect waves-light btn-small");
    var elIcone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    elBtnRemover.append(elIcone);
    elItem.append(elTitulo);
    elItem.append(elImg);
    elItem.append(elBtnRemover);
    elBtnRemover.click(removeJogoDaLista);

    return elItem;
}

function removeJogoDaLista(event) {
    event.preventDefault();
    var item = $(this).parent();
    item.fadeOut(1000);
    setTimeout(function(){
        item.remove();
    }, 1000);
}