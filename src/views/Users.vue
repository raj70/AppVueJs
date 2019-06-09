<template>
  <div class="users">
    <h1>Users</h1>
    <div v-for="user in users" v-bind:key="user._id">
      <span>{{user._id}} {{user.first}} {{user.last}} {{user.createdAt}}</span>
    </div>
    <div>
    <!-- <b-table striped hover :items="users"></b-table> -->
  </div>
  </div>
</template>

<script>
  import * as userService from '../services/UserService';

  export default {
    name: 'users',
    data: function(){
      return{
        users: [],
        errorMessage: ''
      }
    },
    beforeRouteEnter(to,from, next){
      try{
          userService.getAllUsers().then( response => {
              if(!response){
                next(vm => {
                  vm.errorMessage = "Create user first";
                })  
              }else{
                next(vm => {
                   vm.users = response.data.users
                })
              }
          })
      } catch (error) {
        console.log(error);
      }
    }
  }
</script>

