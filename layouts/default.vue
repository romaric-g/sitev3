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
  components: { Grid }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    background: #110d2d;
    font-family: 'Barlow', sans-serif;
}

</style>
