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
            ],
            newTodo:{
                todo:'',
                done:false
            }
        }
    },
    methods:{
        addTodo(){
            this.Todos.push({...this.newTodo})
            this.newTodo.todo =''
        }
    }
}).mount('#app')