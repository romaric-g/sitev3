<template>
    <div class="project-page">
        <template v-if="project != null">
            <div class="header">
                <h1 class="p-title">{{project.name}}</h1>
            </div>
        </template>
        <component :is="singlePostComponent" />
    </div>
</template>

<script>

export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>


<style lang="scss">
.project-page {
    width: 100%;
    .header {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        .p-title {
            margin: 15px 0;
            font-size: 2.8em;
            font-weight: bold;
            text-transform: uppercase;
        }
    }

    .project-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 1rem;
    }
}
section {
    &.head, &.description {
        grid-column: 2/5;
    }
    &.illu {
        grid-column: 1/6;
    }

    &.buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        grid-column: 2/5;
        padding-bottom: 20px;
    }
}

@media screen and (max-width: 550px) {
    section {
        &.head, &.description {
            grid-column: 1/6;
        }
    }
}
</style>