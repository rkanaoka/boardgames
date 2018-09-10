class ListaJogos {
    
    constructor() {
        
        this._jogos = [];
    }
    
    adiciona(jogo) {
        
        this._jogos.push(jogo);
    }

    remove(id) {
        this._jogos = this._jogos.filter(n => n.id!=id);
    }
    
    get jogos() {
        
        return [].concat(this._jogos);
    }
}