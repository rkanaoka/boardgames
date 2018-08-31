class ListaJogos {
    
    constructor() {
        
        this._jogos = [];
    }
    
    adiciona(jogo) {
        
        this._jogos.push(jogo);
    }
    
    get jogos() {
        
        return [].concat(this._jogos);
    }
}