<template>
    <main @click="clickOutside">
      <Menu :open="menu" :toggleMenu="toggleMenu"></Menu>
      <Grid>
        <template v-slot:nav-top>
          <GridLink direction="right" :color="menuLinkColor">
              <p v-if="menu" key="open" @click.prevent="toggleMenu">Close</p>
              <p v-else key="close" @click.prevent="toggleMenu">Menu</p>      
          </GridLink>
        </template>
        <slot></slot>
        <template v-slot:nav-bottom >
          <GridLink direction="left">
              <transition name="link-anim" mode="out-in">
                  <p :key="bottomName"><nuxt-link :to="bottomLink">{{ bottomName }}</nuxt-link></p>
              </transition>
          </GridLink>
        </template>
      </Grid>
    </main>
</template>

<script>

import Grid from '@/components/grid/Grid.vue'
import GridLink from "@/components/grid/GridLink.vue";
import Menu from "@/components/menu/Menu.vue";

export default {
  components: { Grid,GridLink,Menu },
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
  }
}
</script>

<style lang="scss" scoped>
body main{
    background-color: #110d2d;
    color: white;
}
</style>