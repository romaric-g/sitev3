<template>
    <div class="container left">
        <div id="about">
            <img src="@/assets/images/me.jpg" alt="" >
            <section class="about">

                <div class="section-select">
                    <div class="container" v-bind:style="scrollInformation">
                        <section>
                            <h2 class="title">À PROPOS DE MOI</h2>
                            <div class="desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in ut itaque illo obcaecati quod quam amet vitae? Dolore ipsam consequuntur cum quasi reiciendis voluptatum architecto tenetur accusamus laboriosam id.</p>
                            </div>
                        </section>
                        <section>
                            <h2 class="title">FORMATIONS</h2>
                            <div class="desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in ut itaque illo obcaecati quod quam amet vitae? Dolore ipsam consequuntur cum quasi reiciendis voluptatum architecto tenetur accusamus laboriosam id.</p>
                            </div>
                        </section>
                        <section>
                            <h2 class="title">COMPETANCES</h2>
                            <div class="desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in ut itaque illo obcaecati quod quam amet vitae? Dolore ipsam consequuntur cum quasi reiciendis voluptatum architecto tenetur accusamus laboriosam id.</p>
                            </div>
                        </section>
                    </div>
                </div>
            
                <div class="selector">
                    <span></span>
                    <div class="container">
                        <ul>
                            <li @click="changeSection(0)" :class="active(0)"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1.5 2.5c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5s.5.22.5.5-1 1.64-1 2.5c0 .86.67 1.5 1.5 1.5s1.5-.67 1.5-1.5h-1c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-.36 1-1.84 1-2.5 0-.81-.67-1.5-1.5-1.5z" transform="translate(2)"/></svg></li>
                            <li @click="changeSection(1)" :class="active(1)"><svg viewBox="0 0 24 24"><path fill="#000000" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg></li>
                            <li @click="changeSection(2)" :class="active(2)"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-brain fa-w-18"><path fill="currentColor" d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" class=""></path></svg></li>
                        </ul>
                    </div>
                    <span></span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSection: 0
        }
    },
    fetch ({ store, params }) {
        store.commit('defineBottomLink', "Retour au projet", "/");
    },
    methods: {
        changeSection(sectionNumber) {
            this.activeSection = sectionNumber;
        },
        active(sectionNumber) {
            return {
                active: (this.activeSection === sectionNumber)
            }
        }
    },
    computed: {
        scrollInformation() {
            let c = 'translateY(-' +  (this.activeSection * 100) + '%)'
            return {
                transform: c
            }
        }
    }
}
</script>

<style lang="scss">
#about {
    display: grid;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    grid-template-columns: 280px 1fr 1fr;
    width: 100%;
}

#about {

    img {
        width: 100%;
        /*clip-path: polygon(5% 0, 95% 0, 95% 100%, 5% 100%);*/
    }

    section.about {
        grid-column: 2 / 4;
        color: white;
        text-align: right;
        padding-left: 35px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;

        * {
            margin: 0;
        }

        .section-select {
            flex: 1;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 100%;
                transition: all .4s ease-out;
            }

            section {
                height: 100%;
                flex-shrink: 0;
            }
        }

        .title {
            font-size: 3em;
            margin-bottom: 30px;
        }

        .desc p {
             
                font-size: 1.2em;
                font-weight: 300;
                font-family: 'Comfortaa';
        }
    }

    section.about .selector {

        display: flex;
        align-items: center;

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0 15px;
            display: flex;
            align-items: center;
            height: 100px;
        }

        span {
            height: 1px;
            width: 50px;
            background-color: white;
        }

        span:first-child {
            flex: 1;
        }

        li {
            position: relative;
            display: block;
            height: 60px;
            width: 60px;

            display: flex;
            justify-content: center;
            align-items: center;
            
            transition-duration: 0.3s;

            cursor: pointer;
        }

        li.active {
            height: 95px;
            width: 95px;
        }

        li.active::before {
            background-color: white;
        }

        li::before {
            content: "";
            position: absolute;
            display: block;
            transform: rotate(45deg);
            border: 1px solid white;
            height: 50%;
            width: 50%;
            transition-duration: 0.4s;        
        }

        li svg {
            z-index: 1;
            height: 30%;
            width: 30%;
            path {
                fill: white;
            }
        }

        li.active svg path {
             fill: #110d2d;
        }
    }
}
</style>