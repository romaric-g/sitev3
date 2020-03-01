<template>
  <transition name="layout" mode="in-out">
    <div v-if="layout == 'home'" class="home" key="home"><Home><nuxt /></Home></div>
    <div v-else class="projet" key="projet"><Projet><nuxt /></Projet></div>
  </transition>
</template>

<script>

import Home from '@/layouts/layoutsFix/Home.vue'
import Projet from "@/layouts/layoutsFix/Projet.vue";

export default {
  components: { Home, Projet },
  computed: {
    layout () {
      return this.$store.state.layoutName;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:400,500|Comfortaa:300,400&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;

    main {
      position: relative;
      overflow: hidden;
    }
}

@media screen and (max-width: 500px){
  body {
    font-size: 16px;
  }
}

</style>
