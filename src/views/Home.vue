<template>
  <div id="custom-home">
    <IndexVue/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import IndexVue from '@/components/Index.vue'

  export default {
    name: 'home',
    components: {
      IndexVue
    },
    beforeCreate: function(){
      fetch(this.$store.state.apiUrl + '/api/user', {
        method: "GET",
      }).then(res =>{
        return res.json();
      }).then(res=>{
        console.log(res);
      });
    }
  }
</script>
