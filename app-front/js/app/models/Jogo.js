class Jogo {
    
    constructor(id, titulo,imgUrl) {
        
		this._id = id;
		this._titulo = titulo;
		this._imgUrl = imgUrl;
		/*
		titulo: {
			type: String,
			required: true
		},
		autores_id: [Number],
		ilustradores_id: [Number],
		editoras_id: [Number],
		mecanicas_id: [Number],
		descricao: String,
		componentes: String,
		sleeves: [{sleeve_id: Number, qtd: Number}],
		ano: Number,
		minJogadores: Number,
		maxJogadores: Number,
		minTempo: Number,
		maxTempo: Number,
		dimensoes: [Number],
		peso: Number,
		imagens: [{
			type: String,
			required: true
		}]
		*/
    }
    
    get id() {
        return this._id;
    }
    
    get titulo() {    
		return this._titulo;
	}

	get imgUrl() {    
		return this._imgUrl;
	}

}