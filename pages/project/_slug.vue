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