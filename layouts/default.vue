<template>
  <div class="supersite">
    <transition name="layout" mode="in-out">
      <div v-if="layout == 'home'" class="home" key="home"><Home><nuxt /></Home></div>
      <div v-else class="projet" key="projet"><Projet><nuxt /></Projet></div>
    </transition>
  </div>
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
body {
    margin: 0;
    padding: 0;
    font-family: 'Barlow Condensed', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: #110d2d;

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
