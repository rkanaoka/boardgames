export default class JogoService {

    constructor(resource) {

        this._resource = resource('v1/jogos{/id}');
    } 

    lista() {

        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possível obter os jogos');
            });
    }  

    cadastra(jogo) {

        if(jogo._id) {

            return this._resource
                .update({ id: jogo._id}, jogo);

        } else {
            return this._resource
                .save(jogo);    
        }

    }
    
    apaga(id) {

        return this._resource
            .delete({ id })
            .then(null, err => {
                console.log(err);
                throw new Error('Não foi possível remover a foto');
            })
    }

    busca(id) {

        return this._resource
            .get({ id })
            .then(res => res.json());
    }

}