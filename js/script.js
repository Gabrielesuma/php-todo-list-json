const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: [],
            itemText: '',
            apiUrl: 'server.php'
        }
    },
    methods:{
        getData(){
            axios.get(this.apiUrl).then((res)=>{
                this.todo = res.data;
            })
        },
        removeItem(id){
            const i = this.todo.findIndex((el)=> el.id === id);
            if(i!== -1){
                this.todo.splice(i, 1);
            }
        },
        addTodo(){
            const newObj = {
                id: null,
                text: this.itemText,
                done: false
            }
            let nextId = 0;
            this.todo.forEach((el) => {
                if(nextId < el.id){
                    nextId = el.id;
                }
            });
            newObj.id = nextId + 1;
            this.todo.push(newObj);
            this.itemText = '';
            //console.log(this.todo);
        },
        toogleItem(id){
            const item = this.todo.find((el) => {
                return el.id === id;
            })
            if(item){
                item.done = !item.done;
            }
        }
    },
    mounted(){
        //console.log(this.todo);
        this.getData();
    }
}).mount('#app');