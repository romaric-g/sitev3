<template>
    <div class="">
        <section class="head">
            <Description>
            Avec une équipe de 6 personnes, nous avons été chargé de créer un site sur le thèmes des outils et des méthodes de l’UX design. L’Objectif de ce site était tout d’abord de nous initier à l'expérience utilisateur ainsi qu'à la conception d’interface utilisateur. Il a été aussi de créer un site respectant les règles d’accessibilité. Pendant une durée de 2 semaines, nous avons pu utilisé de nombreuse méthodes et outils pour effectuer la recherche utilisateur et aboutir à un site qui réponde aux besoins de nos cibles.
            </Description>
        </section>
        <section class="illu">
            <Illustration :image="{src: 'uxdesign_presentation.png'}"></Illustration>
        </section>
        <section class="buttons">
            <ButtonLink link="https://uxdesign.netlify.com" name="Tester" icon="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30.75" viewBox="0 0 36 30.75">
                <path id="Icon_material-directions-bike" data-name="Icon material-directions-bike" d="M23.25,8.25a3,3,0,1,0-3-3A3.009,3.009,0,0,0,23.25,8.25ZM7.5,18a7.5,7.5,0,0,0,0,15,7.5,7.5,0,0,0,0-15Zm0,12.75a5.25,5.25,0,0,1,0-10.5,5.25,5.25,0,0,1,0,10.5Zm8.7-15,3.6-3.6,1.2,1.2a10.509,10.509,0,0,0,7.65,3.15v-3a7.452,7.452,0,0,1-5.4-2.25L20.4,8.4A3.678,3.678,0,0,0,18,7.5a2.517,2.517,0,0,0-2.1.9l-4.2,4.2a2.962,2.962,0,0,0-.9,2.1,2.517,2.517,0,0,0,.9,2.1L16.5,21v7.5h3V19.2l-3.3-3.45ZM28.5,18A7.5,7.5,0,1,0,36,25.5,7.427,7.427,0,0,0,28.5,18Zm0,12.75a5.25,5.25,0,1,1,5.25-5.25A5.315,5.315,0,0,1,28.5,30.75Z" transform="translate(0 -2.25)"/>
                </svg>
            </ButtonLink>
            <ButtonLink link="https://github.com/Sekori1/OutilsMethodsUXDesign" name="Sources" icon="stroke">
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
    components: {Description,Illustration,ButtonLink},
    props: ["project"]
}
</script>