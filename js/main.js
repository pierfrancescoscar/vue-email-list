// Descrizione:
// Attraverso l’apposita API di Boolean
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue ({
    el: '#app',
    data: {
        mailList: [],
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
    },
    created() {
        this.mailGenerator();
    },
    methods: {
        mailGenerator() {
            for(let i = 0; i < 10; i++) {
                axios.get(this.apiURL).then(response => {
                    response.data.response;
                    this.mailList.push(response.data.response);
                })
            }
        } 
    }
});