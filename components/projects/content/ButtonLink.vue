<template>
    <a class="button" target="_blank" :href="link">
        {{ name }} 
        <span :class="{svgfill: (icon != 'stroke'), svgstroke: (icon != 'fill')}">
            <slot></slot>
        </span>
    </a>
</template>

<script>
export default {
    props: ["link","name","icon"]
}
</script>

<style lang="scss" scoped>
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
</style>