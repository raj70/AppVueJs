<template>
<div class="d-flex flex-column">
    <h1>All Tasks</h1>
    <div class="mb-4">        
        <router-link to="/tasks/new" class="btn btn-success ml-2">Create Task</router-link>
        <a href="#" class="btn btn-success ml-2" @click="getCompletedTask(true)">Completed Tasks</a>
        <a href="#" class="btn btn-success ml-2" @click="getCompletedTask(false)">Not Completed Tasks</a>
        <a href="#" class="btn btn-success ml-2" @click="allTasks">All</a>
    </div>


    <div v-if="tasks && tasks.length > 0" class="d-flex flex-wrap justify-content-start">

        <div v-for="task in tasks" v-bind:key="task._id" class="card mb-2 ml-2 text-white bg-dark" style="width: 18rem;">  
            <!-- https://getbootstrap.com/docs/4.3/components/card/ -->
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{task.title.toUpperCase()}}</h5>
                    <!--  late is CSS  and date is a filter defined in main.js and '|' is pipe-->
                    <span v-bind:class="{ late: taskIsLate(task.dueDate) && !task.completed}" class="small">{{ task.dueDate | date }}</span>
                </div>

                <h6 class="card-subtitle mb-2 text-muted">
                    Created by {{ task.author.username }}
                </h6>

                <p class="card-text">{{task.body}}</p> 

                <div v-if="task.author._id === $store.state.userId" class="form-group form-check"> 
                    <input type="checkbox" 
                        class="form-check-input" 
                        :disabled="task.completed"
                        v-model="task.completed" 
                        v-on:click="markAsCompleted(task)" />

                    <label for="form-check-label">Completed</label>
                </div> 

                <!-- :to={ name: 'tasks-edit', params:{id:task.id}} equal to edit page + "task/id" -->
                <div v-if="task.author._id === $store.state.userId" 
                    class="d-flex justfy-content-between">

                    <router-link type="button" tag="button" class="card-link btn btn-primary"
                    :to="{ name: 'tasks-edit', params: {id:task._id}}" exact>Edit</router-link>

                    <!-- "v-b-modal.modal1" will show modal -->
                    <a v-on:click.prevent="currentTaskId = task._id" class="card-link btn btn-danger" href="#" v-b-modal.modal1>Delete</a>
                    <!-- we have created modal with id modal1 below -->
                </div>     
            </div>
        </div>

        <!-- https://bootstrap-vue.js.org/docs/components/modal -->
        <div>
            <b-modal id="modal1" ref="modal" centered title="Delete Confirmation">
                <template slot="modal-header">
                    <span slot="modal-title" class="modal-title">Delete Task...</span>
                </template>
                
                <div class="d-block text-center"><p class="my-4">Are you sure to delete this task?</p></div>
                <div slot="modal-footer" class="w-100 text-right">
                    <b-btn slot="md" class="mr-1" variant="danger" v-on:click="deleteTask">Delete</b-btn>
                    <b-btn slot="md" class="mr-1" variant="success" @click="cancelTask">Cancel</b-btn>
                </div>
            </b-modal>
        </div>
    </div>   

    <div v-if="tasks && tasks.length === 0" class="ml-2">
        <div class="alert alert-info">No tasks found.</div>
    </div>
</div>
</template>

<script>
import * as taskService from '../../services/TaskService';
import moment from 'moment';

export default {
    name: 'tasks-all',
    data: function(){
        return {
            tasks: null,
            currentTaskId: null
        }
    },
    beforeRouteEnter(to, from, next) {
        taskService.getAllTasks()
            .then(res => {
                    next(vm =>{
                        vm.tasks = res.data.tasks;
                    });
            });
    },
    methods: {
        taskIsLate: function(date){
            return moment(date).isBefore();
        },
        cancelTask: function(){
            this.hideModal();
            this.currentTaskId = null;
        },
        deleteTask: async function(){
            this.hideModal();
            await taskService.deleteTask(this.currentTaskId).then(res =>{
                if(res){
                    const index = this.tasks.findIndex(t => t._id === this.currentTaskId);
                    this.tasks.splice(index, 1);
                    this.currentTaskId = null;
                }
            }).catch(error =>{
                console.log(error);
            });
        },
        markAsCompleted: function(task){
            task.completed = true;
            const request = { task: task};

            taskService.updateTask(request);
        },
        hideModal: function(){
            this.$refs.modal.hide(); /* model refer to ref="model", above in <b-modal> */
        },
        getCompletedTask: function(completed){
            console.log('getCompletedTask');
            taskService.getCompletedTask(completed).then(res=>{
                if(res){
                    this.tasks = res.data.tasks;
                }
            }).catch(error => {
                console.log("CompletedTask Error:", error);
            });
        },
        allTasks: function(){
            taskService.getAllTasks().then(res => {
                if(res){
                    this.tasks = res.data.tasks;
                }
            }).catch(error => {
                console.log("All Task Error", error);
            });
        }
    }
}
</script>
