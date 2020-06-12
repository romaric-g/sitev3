<template>
  <section class="page" :class="{light, scroll}">
    <div class="title">
      <h1><a to="root">Romaric Gauzi</a></h1>
    </div>

    <div class="nav-item-container top">
        <slot name="nav-top"></slot>
    </div>
    <div class="nav-item-container bottom">
        <slot name="nav-bottom"></slot>
    </div>
    <div class="reseaux">
        <Reseaux></Reseaux>
    </div>
    <div class="content">
        <slot></slot>
    </div>
  </section>    
</template>

<script>

import Reseaux from "@/components/common/Reseaux.vue";

export default {
    props: ["light","scroll"],
    components: {Reseaux}
}
</script>

<style lang="scss">
.title > * {
    margin: 20px;
    font-size: 1.7em;
    text-transform: uppercase;
    white-space: nowrap;

    & a {
        text-decoration: none;
    }
      
}
section.page > .content {
    grid-row: 2;
    grid-column: 2;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    & > .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        flex-shrink: 0;
    }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


section.page {
    position: relative;
    height: 100vh;
    width: 100%;
    min-width: 250px;
    min-height: 600px;
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    grid-template-rows: 80px 1fr 80px;
    overflow: hidden;
}

section.page .title {
    grid-column: 1;
    grid-row: 1;
}

section.page .nav-item-container {
    position: relative;
    &.top {
      grid-column: 3;
      grid-row: 1;
      cursor: pointer;
    }
    &.bottom {
      grid-column: 1;
      grid-row: 3;      
    }


}

section.page .reseaux {
    grid-column: 3;
    grid-row: 3;
    position: relative;

    ul {
        list-style: none;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 0;
    }

    svg path {
        fill: white;
    }
}

@media screen and (max-width: 900px) {

    section.page > .content {
        grid-row: 2;
        grid-column: 1 / 4;
    }

    section.page .reseaux {
        grid-column: 2 / 4;
    }

    section.page .reseaux ul {
        position: relative;
        margin: 0;
        padding: 0 20px;
    }
    section.page .reseaux ul li {
        display: inline-block;
        float: right;
        margin: 20px 5px;
    }
    
}

@media screen and (max-width: 550px) {
    section.page {
        display: flex;
        flex-direction: column;
    }
    
    section.page > .title { order: 1; }

    section.page > .nav-item-container.top { order: 2; }
    
    section.page > .content { order: 3; }
    
    section.page > .nav-item-container.bottom { order: 4; }
    
    section.page > .reseaux { order: 5; }

    section.page > .content {
        order: 3;
        flex: 1;
        padding: 20px 10px;
        z-index: 1;

        .illustration {
            opacity: 0.8;
        }
    }

    section.page .title h1 {
        text-align: center;
        margin-bottom: 0;
    }

    section.page .reseaux ul  {
        display: flex;
        justify-content: center;
    }

    section.page .reseaux ul li {
        float: unset;
        margin: 0 12px 20px 12px;
    }
}

section.page.light {
    box-shadow: 0 -6px 12px rgba(0, 0, 0, 0.438);
    .reseaux svg path {
        fill: #110d2d;
    }
}

section.page.scroll {
    height: unset!important;
    min-height: 100vh;
}


</style>