<template>
    <div class="project-image">
        <img :src="image.src" :alt="image.alt" srcset="">
    </div>
</template>

<script>
export default {
    props: ["image"]
}
</script>

<style lang="scss">

</style>