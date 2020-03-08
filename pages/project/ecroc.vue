<template>
    <div class="content">
        <section class="head">
            <Description>Ecroc est un projet réalisé par une équipe de 5 personnes ayant pour but d’automatiser la distribution de nourriture pour son chien. La réalisation de ce projet constitue une de nos notes pour notre baccalauréat STI2D option SIN.</Description>
        </section>
        <section class="illu">
            <Illustration :image="{src: projectInfo}"></Illustration>
        </section>
        <section class="buttons">
            <ButtonLink link="https://ecroc.gauzi.fr" name="Tester" icon="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30.75" viewBox="0 0 36 30.75">
                <path id="Icon_material-directions-bike" data-name="Icon material-directions-bike" d="M23.25,8.25a3,3,0,1,0-3-3A3.009,3.009,0,0,0,23.25,8.25ZM7.5,18a7.5,7.5,0,0,0,0,15,7.5,7.5,0,0,0,0-15Zm0,12.75a5.25,5.25,0,0,1,0-10.5,5.25,5.25,0,0,1,0,10.5Zm8.7-15,3.6-3.6,1.2,1.2a10.509,10.509,0,0,0,7.65,3.15v-3a7.452,7.452,0,0,1-5.4-2.25L20.4,8.4A3.678,3.678,0,0,0,18,7.5a2.517,2.517,0,0,0-2.1.9l-4.2,4.2a2.962,2.962,0,0,0-.9,2.1,2.517,2.517,0,0,0,.9,2.1L16.5,21v7.5h3V19.2l-3.3-3.45ZM28.5,18A7.5,7.5,0,1,0,36,25.5,7.427,7.427,0,0,0,28.5,18Zm0,12.75a5.25,5.25,0,1,1,5.25-5.25A5.315,5.315,0,0,1,28.5,30.75Z" transform="translate(0 -2.25)"/>
                </svg>
            </ButtonLink>
            <ButtonLink link="https://github.com/Sekori1/Ecroc" name="Sources" icon="stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.113" height="17.296" viewBox="0 0 26.113 17.296"><g id="Icon_feather-code" data-name="Icon feather-code" transform="translate(-2 -7.586)"><path id="Tracé_7" data-name="Tracé 7" d="M24,23.468l7.234-7.234L24,9" transform="translate(-4.121)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Tracé_8" data-name="Tracé 8" d="M10.234,9,3,16.234l7.234,7.234" transform="translate(0)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
            </ButtonLink>
        </section>
        <section class="description">
            <Description>
                Sa réalisation a nécessité une grande attention au cahier des charges pour que le projet réponde bien aux exigences demandé. Après de nombreuse études (Analyse de l’existant, Réalisation de diagramme, définition du besoin, etc.), nous avons pu commencé à faire une sélection des choix technique qui pourrait être utilisé. 
                <br>Pour ma part, ma fonction a été de réaliser le site internet permettant d’avoir accès à notre distributeur de croquette à distance. La solution qui a été choisie pour sa réalisation est PHP ainsi que l’utilisation de SQL. Cela à été pour moi l’occasion de réaliser un premier projet avec cette technologie en laquelle j’avais peu d’expérience.
                <br><br>
                Le site est composé d’un système d’authentification, d’un panel de gestion de ces chiens ainsi que de nombreux paramètre de configuration. Le propriétaire peut en tant réel voir la consommation de nourriture ses différents chien, changé la quantité de nourriture en fonction des jours et des repas et peut etre alerté à tout moment de cas de problème sur l’appareil.
                <br>
                Pour que notre produit puisse fonctionner, je me suis aussi occupé en partie de la communication entre le site et un arduino. Pour cela, différents script PHP on été créés et un protocole de communication à été établie entre les 2 parties. Les données renvoyé par le serveur sont renvoyé en json et traité par l’arduino avec une librairie prévue à cette effet.
            </Description>
        </section>
    </div>
</template>

<script>
import Description from "@/components/projects/content/Description.vue";
import Illustration from "@/components/projects/content/Illustration.vue";
import ButtonLink from "@/components/projects/content/ButtonLink.vue";

export default {
    props: ["project"],
    components: {Description, Illustration, ButtonLink},
    data() {
        return {
            
        }
    },
    computed: {
        projectInfo: function() {
            console.log(this.project)
            return this.project.image;
        }
    }
}
</script>

<style lang="scss" scoped>
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