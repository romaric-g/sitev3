<template>
    <div class="project-page">
        <template v-if="project != null">
            <div class="header">
                <h1 class="p-title">{{project.name}}</h1>
            </div>
        </template>
        <nuxt-child :project="project"></nuxt-child>
    </div>
</template>

<script>

export default {
    name: "projet",
    fetch({ store, params }) {
        store.commit("layoutName", "projet");
    },
    data() {
        return {
            project: null
        }
    },
    mounted() {
        let matchedRoutes = this.$router.currentRoute.matched
        let name = matchedRoutes[1].path.replace((matchedRoutes[0].path + "/"), "")
        this.project = this.$store.state.projects[name];
    }
    
}
</script>


<style lang="scss">
.project-page {
    width: 100%;
}
.header {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    .p-title {
        font-size: 2em;
        text-transform: uppercase;
    }
}
</style>