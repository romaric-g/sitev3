<template>
  <div class="home">
      <main @click="clickOutside">
        <Menu :open="menu" :toggleMenu="toggleMenu"></Menu>
        <Grid>
          <template v-slot:nav-top>
            <GridLink direction="right" :color="menuLinkColor">
                <p v-if="menu" key="open" @click.prevent="toggleMenu">Close</p>
                <p v-else key="close" @click.prevent="toggleMenu">Menu</p>      
            </GridLink>
          </template>
          <nuxt />
          <template v-slot:nav-bottom >
            <GridLink direction="left">
                <transition name="link-anim" mode="out-in">
                    <p :key="bottomName"><nuxt-link :to="bottomLink">{{ bottomName }}</nuxt-link></p>
                </transition>
            </GridLink>
          </template>
        </Grid>
      </main>
  </div>
</template>

<script>

import Grid from '@/components/grid/Grid.vue'
import GridLink from "@/components/grid/GridLink.vue";
import Menu from "@/components/menu/Menu.vue";

export default {
  components: { Grid,GridLink,Menu },
  name: 'default',
  data() {
    return {
      menu: false
    }
  },
  computed: {
    menuLinkColor() {
      return this.menu ? "#110d2d" : "#ffffff";
    },
    menuKinkText() {
      return this.menu ? "Close" : "Open";
    },
    bottomLink () {
      return this.$store.state.bottomLink.link;
    },
    bottomName() {
      let l = this.$store.state.bottomLink.name;
      return l || "/";     
    }
  },
  methods: {
    toggleMenu(e) {
      e.clickMenu = true;
      this.menu = !this.menu;
    },
    clickOutside(e) {
      if(this.menu && !e.clickMenu) {
        if(!e.path.find((o) => o.classList ? Object.values(o.classList).includes("header") : false)) {
          this.menu = false;
        }
      }
    }
  },
  transition: {
    name: 'layoutdefault',
    mode: 'in-out'
  },
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

    main{
      position: relative;
      overflow: hidden;
      background-color: #110d2d;
      color: white;
    }
}

.projet {
  width: 100%;
}

@media screen and (max-width: 500px){
  body {
    font-size: 16px;
  }
}

</style>
