<template>
  <div>
    <Grid>
      <nuxt />
    </Grid>
  </div>
</template>

<script>

import Grid from '@/components/grid/Grid.vue'

export default {
  components: { Grid },
  pageTransition: {
    name: 'router-anim',
    mode: 'out-in',
    duration: 6000
  }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    background: #110d2d;
    font-family: 'Barlow', sans-serif;
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
