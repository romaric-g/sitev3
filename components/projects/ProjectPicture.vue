<template>
    <div class="imageBox">
        <img v-bind:src="project.img_src" :class="isUp" alt="">
    </div>   
</template>


<script>
export default {
    props: ['project', 'index', 'sel'],
    computed: {
        isUp: function() {
            return this.index > this.sel ? 'up' : '';
        }
    }
}
</script>


<style lang="sass">

</style>