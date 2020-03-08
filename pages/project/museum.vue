<template>
    <div>
        <section class="head">
            <Description>
                Afin de mettre en valeur une sélection d’oeuvre fait par nos soins, notre objectif a été de créer un “musée virtuel” afin de présentant ces oeuvre sur un site internet de manière organisé. La solutions imposé pour cette exercice a été ruby on rails ainsi que postgresql pour la base de donnée.
            </Description>
        </section>
        <section class="illu">
            <Illustration :image="{src: 'museumpresentation.png'}"></Illustration>
        </section>
        <section class="buttons">
            <ButtonLink link="https://themuseum.herokuapp.com/" name="Visiter" icon="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="27" viewBox="0 0 40.5 27"><path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M40.255,16.973A22.552,22.552,0,0,0,20.25,4.5,22.555,22.555,0,0,0,.245,16.974a2.275,2.275,0,0,0,0,2.052A22.552,22.552,0,0,0,20.25,31.5,22.555,22.555,0,0,0,40.255,19.026,2.275,2.275,0,0,0,40.255,16.973ZM20.25,28.125A10.125,10.125,0,1,1,30.375,18,10.125,10.125,0,0,1,20.25,28.125Zm0-16.875a6.7,6.7,0,0,0-1.78.266,3.364,3.364,0,0,1-4.7,4.7,6.735,6.735,0,1,0,6.484-4.97Z" transform="translate(0 -4.5)"/></svg>    
            </ButtonLink>
            <ButtonLink link="https://github.com/Sekori1/VirtualMuseum" name="Sources" icon="stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.113" height="17.296" viewBox="0 0 26.113 17.296"><g id="Icon_feather-code" data-name="Icon feather-code" transform="translate(-2 -7.586)"><path id="Tracé_7" data-name="Tracé 7" d="M24,23.468l7.234-7.234L24,9" transform="translate(-4.121)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Tracé_8" data-name="Tracé 8" d="M10.234,9,3,16.234l7.234,7.234" transform="translate(0)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
            </ButtonLink>
        </section>
    </div>
</template>

<script>
import Description from "@/components/projects/content/Description.vue"
import Illustration from "@/components/projects/content/Illustration.vue"
import ButtonLink from "@/components/projects/content/ButtonLink.vue"

export default {
    components: {Description,Illustration,ButtonLink}
}
</script>