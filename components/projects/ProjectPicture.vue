<template>
    <div class="imageBox">
        <img :src="'projects/'+project.image" :class="isUp" alt="">
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