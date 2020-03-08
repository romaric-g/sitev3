<template>
    <div class="content">
        <section class="head">
            <Description>Cette application Android permet de découvrir la ville de Barcelone. Seul ou en équipe, suivez un parcours définis afin de vous rendre aux différents lieux mythique de la ville. Chaque lieu sur la carte sont accompagnés d’une question sous forme de QCM. Répondez à chaque questions dans un temps impartie pour obtenir le meilleur score!</Description>
        </section>
        <section class="illu">
            <Illustration :image="{src: projectInfo}"></Illustration>
        </section>
        <section class="buttons">
            <ButtonLink link="https://drive.google.com/file/d/1Nqf1HuIp4wFfh6GJBGrCG38FdCQ3lzyr/view?usp=sharing" name="Obtenir" icon="stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.585" height="25.585" viewBox="0 0 25.585 25.585"><g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-3.5 -3.5)"><path id="Tracé_4" data-name="Tracé 4" d="M28.085,22.5v5.241a2.621,2.621,0,0,1-2.621,2.621H7.121A2.621,2.621,0,0,1,4.5,27.741V22.5" transform="translate(0 -2.277)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Tracé_5" data-name="Tracé 5" d="M10.5,15l6.551,6.551L23.6,15" transform="translate(-0.759 -1.328)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Tracé_6" data-name="Tracé 6" d="M18,20.223V4.5" transform="translate(-1.708)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
            </ButtonLink>
            <ButtonLink link="" name="Sources" icon="stroke">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.113" height="17.296" viewBox="0 0 26.113 17.296"><g id="Icon_feather-code" data-name="Icon feather-code" transform="translate(-2 -7.586)"><path id="Tracé_7" data-name="Tracé 7" d="M24,23.468l7.234-7.234L24,9" transform="translate(-4.121)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="Tracé_8" data-name="Tracé 8" d="M10.234,9,3,16.234l7.234,7.234" transform="translate(0)" fill="none" stroke="#110d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
            </ButtonLink>
        </section>
        <section class="description">
            <Description>
                Le projet a été initié par le laboratoire tech du lycée de Paarentis en Born. La mission était simple, faire découvrir aux élèves la ville et les grands lieux qu’elle renferme. Celle ci sera utilisé pour le grand départ en espagne de 2019.
                <br><br>
                La solution choisie pour le développement est Android studio, nos moyens ne nous permettait pas d’avoir un support complet pour les appareils sous IOS. Les applications sous android sont plus accessible, elle ne nécessite pas d'environnement de développement en particulier et sont installables de manière simple sans avoir à passer par le store officiel de l’appareil. Le langage utilisé est Java et le contenu est tiré du quiz préparé par les organisateurs du voyage.
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

</style>