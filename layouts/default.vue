<template>
  <main @click="clickOutside">
    <Menu :open="menu"></Menu>
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
</template>

<script>

import Grid from '@/components/grid/Grid.vue'
import GridLink from "@/components/grid/GridLink.vue";
import Menu from "@/components/menu/Menu.vue";

export default {
  components: { Grid,GridLink,Menu },
  pageTransition: {
    name: 'router-anim',
    mode: 'out-in',
    duration: 6000
  },
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
      if(this.menu && !e.clickMenu) {//tagName
        if(!((e.target && e.target.tagName === "HEADER") || (e.srcElement && e.srcElement.offsetParent && e.srcElement.offsetParent.tagName === "HEADER"))) {
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

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
}

.left.router-anim-enter-active {
  animation: leavingLeft .4s ease-in-out;
}
.left.router-anim-leave-active {
  animation: goingLeft .4s ease-in-out;
}
.center.router-anim-enter-active {
  animation: goingCenter .4s ease-in-out;
}
.center.router-anim-leave-active {
  animation: leavingCenter .4s ease-in-out;
}

@keyframes goingLeft {
  from { transform: translateX(0); } 
  to { transform: translateX(-150%); }
}
@keyframes leavingLeft {
  from { transform: translateX(-150%); } 
  to { transform: translateX(0);}
}
@keyframes goingCenter {
  from {transform: translateX(150%);} 
  to { transform: translateX(0);}
}
@keyframes leavingCenter {
  from { transform: translateX(0);} 
  to { transform: translateX(150%); }
}


@media screen and (max-width: 500px){
  body {
    font-size: 16px;
  }
}

</style>
