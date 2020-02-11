<template>
    <div class="nav-item" :class="direction">
        <span></span>
        <!-- <p><a href="#">ME CONTACTEZ</a></p> -->
          <transition name="link-anim" :duration="2000">
            <p :key="bottomName"><nuxt-link :to="bottomLink ? bottomLink : '/'" href="#">{{ bottomName }}</nuxt-link></p>
          </transition>
    </div>
</template>

<script>
export default {
    props: ["direction"],
    computed: {
        bottomLink () {
            return this.$store.state.bottomLink.link;
        },
        bottomName() {
            return this.$store.state.bottomLink.name
        }
    },
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
    z-index: 2;

    /* Animation */
    .link-anim-leave-active {
        transform: scale(0);
        transition: all 0.4s;
    }
    .link-anim-enter { opacity: 0; }
    &.right .link-anim-enter { transform: translateX(-200px) scale(0.5) }
    &.left .link-anim-enter { transform: translateX(200px) scale(0.5); }
    .link-anim-enter-active {
        transition-delay: 0.4s;
        transition: all 0.4s;
    }

    span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: white;
    }

    p {
        position: absolute;
        color: white;
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
        color: white;
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
        color: white;
        font-size: .9em;
        margin: 20px 0!important;
    }
}


</style>