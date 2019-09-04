<template>
    <div id="app">
        <p style="padding-right:0px;">
            <button class="hello" @click="Return">返回</button>
            <span>{{username}}</span>
        </p>
        <p>
        <router-link :to="{name:'home'}">首页</router-link>
        </p>
        <router-link :to="{name:'mypage'}">我的</router-link>

        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        
        <CreateForm/>
        <TodoList/>
        <TodoListFilter/>
    </div>
</template>

<script>
    import CreateForm from './components/CreateForm.vue'
    import TodoList from './components/TodoList.vue'
    import TodoListFilter from './components/TodoListFilter.vue'
    

    export default {
        name: 'app',
        props: ['username'],
        components: {
            CreateForm,
            TodoList,
            TodoListFilter,
        },
  
        created:function(){
            this.$store.dispatch('fetchtodos');
            
        },
        methods:{
            Return:function(){
                var conf = confirm("返回欢迎页面请单击【确定】")
                if(conf==true){
	 	            this.$router.push('/')
	            }else {
	            	this.$router.push("{name:'home'}")
	            }

                

            }
        }
        

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
