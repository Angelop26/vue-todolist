const{createApp} = Vue

createApp({
    data(){
        return{
            Todos:[
                {
                    todo:'fare la spesa',
                    done:false
                },
                {
                    todo:'finire i compiti',
                    done:true
                },
                {
                    todo:'fare reso amazon',
                    done: true
                }
            ]
        }
    },
    methods:{

    }
}).mount('#app')