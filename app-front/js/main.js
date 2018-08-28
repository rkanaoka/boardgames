

var app = new Vue({
    el: '#app',
    data: {
        jogos:[],
        jogo:{},
        jogosFake:[
            {titulo:'Jogo1',imgUrl:'a'},
            {titulo:'Jogo2',imgUrl:'a'}
        ],
    },

    created() {
        this.carregarLista();
    },

    methods: {
        carregarLista() {
            $.get('http://localhost:3000/v1/jogos',
                jogos => this.jogos = jogos);
        },

        carregarListaFake() {
            this.jogos = this.jogosFake;
        },

        grava() {
            $.post('http://localhost:3000/v1/jogos',this.jogo,
                this.carregarLista());
        },

        remove(id) {
            this.$http.delete(`http://localhost:3000/v1/jogo/${id}`,
                this.carregarLista());
        }
    }
  })
  