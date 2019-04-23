<template>
    <div> 
       <h1>Edit Task: {{ task.title.toUpperCase() }}</h1>
    
    <form v-if="taskFound" class="custom-form" v-on:submit.prevent="onSubmit">
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
            <!-- <button type="submit" class="btn btn-primary">Update</button> -->

            <!-- "v-b-modal.modalUpdate" will show modal -->
            <a v-on:click.prevent="currentTaskId = task._id" class="card-link btn btn-primary" href="#" v-b-modal.modalUpdate>Update</a>
            <router-link type="button" tag="button" :to="{ name:'tasks-all'}" class="card-link btn btn-secondary">Back to All Tasks</router-link>            
            <!-- just another way of using router , check router.js -->
            <router-link type="button" tag="button" to="/tasks" class="card-link btn btn-secondary">Back to All Tasks</router-link>            
        </div>
    </form>
    
    <div>
        <!-- modalUpdate is used above to show model -->
        <!-- modalUpdateRef is used by vue below to hide view -->
        <b-modal id="modalUpdate" ref="modalUpdateRef" centered title="Update Confirmation">
            <template slot="modal-header">
                <span slot="modal-title" class="modal-title">Update Task...?</span>
            </template>
            
            <div class="d-block text-center"><p class="my-4">Are you sure to update this task?</p></div>
            <div slot="modal-footer" class="w-100 text-right">
                <b-btn slot="md" class="mr-1" variant="danger" v-on:click="updateTask">Update</b-btn>
                <b-btn slot="md" class="mr-1" variant="success" @click="cancelUpdateTask">Cancel</b-btn> 
            </div>
        </b-modal>
    </div>

    <div v-if="!taskFound" class="ml-2">
        <div class="alert alert-info">No task found.</div>
    </div>
    </div>
</template>

<!-- https://router.vuejs.org/guide/#html -->
<script>
    import * as taskService from '../../services/TaskService';
    import moment from 'moment';

    export default {
        name: 'task-edit',
        data: function(){
            return  {
                task: {
                    title: '',
                    body:'',
                    dueDate: ''
                },
                taskFound: true
            }
        },
        /* https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards */    
        beforeRouteEnter(to, from, next){
            const taskId = to.params.id;  
            var taskPromise = taskService.getTaskbyId(taskId);      
            taskPromise.then( res => {
                if(!res){
                    next(vm =>{
                        vm.taskFound = false;
                    });
                }else{
                    next(vm =>{
                        const task = res.data.task;
                        task.dueDate = moment(task.dueDate).format("YYYY-MM-DD");
                        vm.task = task;                        
                    });
                } })
        },
        beforeCreate: function(){
            console.log("before created and what", this);
        },
        methods:{
            cancelUpdateTask: function(){
                this.$refs.modalUpdateRef.hide();
            },
            updateTask: function(){
                this.cancelUpdateTask();
                this.onSubmit();
                this.routeMetoAllTask();
            },
            onSubmit: async function(){
                const newTask = {
                    task: this.task
                }
                await taskService.updateTask(newTask).then(res=>{
                    if(res){
                        console.log(res);
                    }
                }).catch(reason =>{
                        console.log(reason);                    
                });
            },
            routeMetoAllTask: function(){
                this.$router.push({name: 'tasks-all'})
            }
        }

    }
</script>
