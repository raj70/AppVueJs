<template>
    <div> 
       <h1>Create Task</h1>
    
    <form class="custom-form" v-on:submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input v-model="task.title" type="text" class="form-control" id="title" placeholder="Title">        
        </div>
        <div class="form-group">
            <label for="body">Content</label>
            <textarea v-model="task.body" type="text" class="form-control" id="body" placeholder="Content">
            </textarea>
        </div>
        <div class="form-group">
            <label for="dueDate">Due Date</label>
            <input v-model="task.dueDate" type="date" class="form-control" id="dueDate" placeholder="DueDate">            
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Create</button>
        </div>
    </form>
    </div>
</template>


<script>
    import * as taskService from '../../services/TaskService';

    export default {
        name: 'task-create',
        data: function(){
            return  {
                task: {
                    title: '',
                    body:'',
                    dueDate: ''
                }
            }
        },
        methods:{
            onSubmit: async function(){
                const newTask = {
                    task: this.task
                }
                await taskService.createTask(newTask);
                this.$router.push({name: 'tasks-all'})
            }
        }

    }
</script>
