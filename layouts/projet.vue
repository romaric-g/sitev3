<template>
  <main>
    <Grid :color="color" light="true">
      <template v-slot:nav-top>
        <GridLink direction="right" :color="color">
            <p><nuxt-link to="/">Back</nuxt-link></p>
        </GridLink>
      </template>
      <nuxt />
      <template v-slot:nav-bottom>
        <GridLink direction="left" :color="color">
            <p><nuxt-link to="/">Back</nuxt-link></p>
        </GridLink>
      </template>
    </Grid>
  </main>
</template>

<script>

import Grid from '@/components/grid/Grid.vue'
import GridLink from '@/components/grid/GridLink.vue'

export default {
  components: { Grid,GridLink },
  data() {
      return {
          color: "#110d2d"
      }
  }
}
</script>


<style lang="scss" scoped>
    body main {
        background-color: white;
        color: #110d2d;
    }
    .nav-item span {
        background-color: #110d2d;
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
</style>