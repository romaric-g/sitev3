<template>
    <div class="error">
        <h1>Cette page n'existe pas!</h1>
        <a href="/">Retour au site</a>
    </div>
</template>

<script>

</script>

<style lang="scss">
.error {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        display: block;
        font-size: 2em;
        margin: 0.5em;
    }
    a {
        display: block;
        width: 200px;
        height: 45px;
        line-height: 45px;
        background: white;
        border-radius:15px;
        text-align: center;
        text-decoration: none;
        color: #110d2d;
    }
}
</style>