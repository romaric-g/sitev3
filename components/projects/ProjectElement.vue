<template>
    <li v-on:click="$emit('select')"><p>{{ number+1 }}</p></li>
</template>

<script>
export default {
    props: ['number']
}
</script>

<style lang="sass">

</style>