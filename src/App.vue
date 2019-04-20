<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div id='app-container'>
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import NavBar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'app',
    components: {
      NavBar,
      Footer
    },
    beforeCreate:function(){
      this.$store.dispatch('authenticate');
    }
  }
</script>