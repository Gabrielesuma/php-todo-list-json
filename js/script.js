const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: [],
            itemText: '',
            apiUrl: 'server.php',
            lastId: null,
            newItem: {
                text: "",
                done: ""
            }
        }
    },
    methods:{
        getData(){
            axios.get(this.apiUrl).then((res)=>{
                this.todo = res.data;
                this.lastId = this.data.length - 1;
            })
        },
        removeItem(id){
            const i = this.todo.findIndex((el)=> el.id === id);
            if(i!== -1){
                this.todo.splice(i, 1);
            }
        },
        addTodo(){
            const items = {...newItem};
            this.newItem = {
                text: "",
                done: ""
            };
            this.lastId+= 1;
            items.id = this.lastId;
            this.data.push(items);
            /*const newObj = {
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
            const data = new FormData();
            for(let key in newObj){
                data.append(key, newObj[key]);
            }*/
            axios.post(this.apiUrl, data).then((res)=>{
                console.log(res.data);
                this.lastId = this.data.length - 1;
            })
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