import axios from 'axios'
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo(state,content){
            state.todoList.push({
                status: 'active',
                content
            })
        },
        toggleActive: function (state,index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        updateCurrentFilter: function (state,currentFilter) {
            state.currentFilter = currentFilter;
        },
        inittodos:function(state,todos){
            //todos = response.data
            state.todoList = todos

        },
        addtodos:function(state,todo){
            state.todoList.push(todo)

        }
    },
    actions:{
        fetchtodos:function(context){
            const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function(response){
                context.commit("inittodos",response.data)
            }).catch(function(error){
                console.log(error.response)
            })   
        },
        addtodos:function(context,inputtingText){
            const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
                content:inputtingText,
                status:"active"
            }).catch(function(error){
                alert(error.response)
            });
            context.dispatch('fetchtodos',context)  
        },
        updateStatus:function(context,index){
            const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.put(url),then(function(response){
                context.commit("toggleActive",index)
            }).catch(function(error){
                console.log(error.response);
            })
        },   

    }
}
