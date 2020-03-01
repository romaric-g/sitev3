<template>
    <div class="nav-item" :class="direction" :style="{ color: color}">
        <span v-bind:style="{ backgroundColor: color}"></span>
        <!-- <p><a href="#">ME CONTACTEZ</a></p> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["direction","color"],
    data() {
        return {
            show: true
        }
    }
}
</script>

<style lang="scss">
.nav-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    z-index: 15;

    /* Animation */
    .link-anim-leave-active {
        transform: scale(0);
        transition: all 0.4s;
    }
    .link-anim-enter { opacity: 0; }
    &.right .link-anim-enter { transform: translateX(-200px) scale(0.5) }
    &.left .link-anim-enter { transform: translateX(200px) scale(0.5); }
    .link-anim-enter-active {
        transition: all 0.4s;
        transition-delay: 0.8s;
    }

    span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: white;
        transition: background-color 0.3s;
    }

    p {
        position: absolute;
        color: inherit;
        transition: color 0.3s;
        white-space: nowrap;
        font-size: 1.1em;
        letter-spacing: 4px;
    }
    
    &.right p {
        right: 100%;
        margin: 0 20px 0 0;
        text-align: right;
    }

    &.left p {
        left: 100%;
        margin: 0 0 0 20px;
        text-align: left;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
}

@media screen and (max-width: 550px) {

    .nav-item.right {
        display: flex;
        flex-flow: column-reverse;
    }

    .nav-item.left {
        display: flex;
        flex-flow: column;
    }

    .nav-item p {
        position: static;
        text-align: center;
        font-size: .9em;
        margin: 15px 0!important;
    }
}


</style>