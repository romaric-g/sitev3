<template>
        <div class="project-page">
            <div class="header">
                <h1 class="p-title">{{title}}</h1>
            </div>
            <div class="fill">
                <div class="project-content" v-html="html">
                </div>
            </div>
        </div>
</template>

<script>

export default {
  async asyncData({ params, redirect  }) {
    try {
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        html: post.html
      };
    } catch (err) {
      redirect("/")  
      return false;
    }
  },
  data() {
      return {
          title: null
      }
  },
  layout: 'project',
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
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-size: 1.2em;
        }
        a.button {
            position: relative;
            display: inline-block;
            border: 1px solid #110d2d;
            min-width: 200px;
            text-align: center;
            padding: 13px;
            font-size: 1.3em;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;
            background-color: white;
            color: #110d2d;
            letter-spacing: 2px;
            margin: 4px 8px;
            transition-duration: .2s;

            &:hover, &:focus {
                background-color: #110d2d;
                color: white;

                span.svgstroke {
                    svg, svg path{
                        stroke: white;
                    }
                }
                span.svgfill{
                    svg, svg path{
                        fill: white;
                    }
                }
            }

            span {
                position: absolute;
                right: 20px;
                top: 20px;
                bottom: 20px;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    height: 25px;
                    width: 25px;
                }
            }


        }

        img {
            padding: 40px 0;
            width: 100%;
        }
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