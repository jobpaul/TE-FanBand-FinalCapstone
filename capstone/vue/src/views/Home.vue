<template>
  <div class="home">
    <div id="home-heading" class="heading">
       <h1>Home</h1>
    </div>
   
    <router-link class="heading" id="createBand" v-bind:to="{ name: 'createBand'}">Create New Band</router-link>
    <home-feed></home-feed>
  </div>
</template>

<script>
import HomeFeed from '../components/HomeFeed.vue';
export default {
  name: "home",
  components: { HomeFeed}
};
</script>
<style scoped>
.home {
  background-image: url(../assets/images/90sbackground3.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100%;
  width: 100vw;
}

#createBand {
  margin-left: 45px;
}

/* #home-heading{
  background-image: linear-gradient(rgb(156, 170, 233), rgb(176, 79, 196));
  width: 35%;
  margin: auto;
  margin-top: auto ;
  border-style: ridge;
  
  
} */


</style>
