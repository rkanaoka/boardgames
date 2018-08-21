var app = new Vue({
    el: '#app',
    data: {
        jogos:[
        ]
    },

    created() {
        this.service = new JogoService(this.$resource);

        //this.service
          //.lista()
          //.then(jogos => this.jogos = jogos, err => this.mensagem = err.message);
    },

    methods: {
        grava() {

        }
    }
  })
  