<template>
    <div class="project-image">
        <img :src="'/projects/'+image.src" :alt="image.alt ? image.alt : ''" srcset="">
    </div>
</template>

<script>
export default {
    props: ["image"],
    beforeMount() {
        console.log(this)
    }
}
</script>

<style lang="scss">
.project-image {
    padding: 40px 0;
}
.project-image, img {
    width: 100%;
}
</style>