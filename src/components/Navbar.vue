<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link to="/" class="navbar-brand">
          <img style="max-height:25px;" src="../assets/logo.png" alt="logo"> Task Manager
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" exact>
              Home
            </router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <router-link to="/Tasks" class="nav-link" exact>
              Task
            </router-link>
          </li>
           <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link to="/Register" class="nav-link" exact>
              Register
            </router-link>
          </li>
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link to="/Login" class="nav-link" exact>
              Login
            </router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
             <!-- <router-link v-on:click.prevent="logout()" to="/Logout" class="nav-link" exact>
              Logout
            </router-link> -->
            <a  v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>
          </li>
          <li class="nav-item" exact>            
            <a class="nav-link" href="#">{{this.$store.state.username ? this.$store.state.username : 'User'}}</a>
          </li>
          <li class="nav-item" exact>            
            <router-link to="/Users" class="nav-link" exact>
              Users
            </router-link>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
  import * as auth from '../services/AuthService';

  export default {
    name: 'Navbar',
    methods: {
      logout: function(){
        console.log("calling logout");
        auth.logout();
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

