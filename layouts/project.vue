<template>
  <div class="projet">
        <main>
            <Grid :color="color" light="true" scroll="true">
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
  </div>
</template>

<script>

import Grid from '@/components/grid/Grid.vue'
import GridLink from '@/components/grid/GridLink.vue'

export default {
  components: { Grid,GridLink },
  name: 'project',
  data() {
      return {
          color: "#110d2d"
      }
  },
  transition: {
    name: 'layoutproject',
    mode: 'in-out'
  },
}
</script>

<style lang="scss" scoped>
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
        background-color: #F1F4F5;
        color: #110d2d;
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

.nav-item span {
    background-color: #110d2d;
}
</style>