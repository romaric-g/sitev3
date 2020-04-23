<template>
    <div class="header" :class="{open: open}">
        <div class="mobile-closer" @click="toggleMenu">
            <p>close</p>
        </div>
        <nav>
            <ul>
                <li>
                    <p class="nav-title" @click="toggleMenu">
                        <nuxt-link to="/">
                            Projets<span class="count">{{ projects.length}}</span>
                        </nuxt-link>
                    </p>
                    <ul>
                        <li v-for="(project, index) of projects" :key="index"><nuxt-link :to="'project/' + project.path ">{{project.name}}</nuxt-link></li>
                    </ul>
                </li>
                <li>
                    <p class="nav-title" @click="toggleMenu"><nuxt-link to="/about">À propos</nuxt-link></p>
                </li>
                <li>
                    <p class="nav-title">Contact</p>
                    <div class="contact">
                        <p>contact@romaricgauzi.com</p>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="menu-reseaux">
            <Reseaux></Reseaux>
        </div>
    </div>
</template>

<script>

import Reseaux from "@/components/common/Reseaux.vue";

export default {
    props: ["open","toggleMenu"],
    components: {Reseaux},
    data() {
        return {
            projects: this.$store.getters.projectsList
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        position: absolute;
        z-index: 10;
        width: 410px;
        max-width: 100vw;
        background-color: #F1F4F5;
        color: #110d2d;
        top: 0;right: 0;bottom: 0;
        transform: translateX(150%);
        transition: transform 0.3s;
        padding: 100px 20px 20px 20px;
        display: flex;
        flex-direction: column;
        box-shadow: -20px 0 50px rgba(0, 0, 0, 0.3);

        .mobile-closer {
            display: none;
        }
    }
    .header.open {
        transform: translateX(0)
    }

    //HEADER SECTIONS

    .header nav {
        flex: 1;
        & > ul {
            height: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        ul {
            list-style: none;
            text-align: center;
            &, li {
                padding: 0;

                a {
                    text-decoration: none;
                    color: #110d2d;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }

        .nav-title {
            position: relative;
            display: inline-block;
            font-size: 1.8em;
            letter-spacing: 4px;
            text-transform: uppercase;
            font-weight: 500;
            & > a {
                text-decoration: none;


                &:hover {
                    text-decoration: none;
                }
            }

            span {
                position: absolute;
                top: 0.6em;
                font-size: 0.6em;
                line-height: 1em;
                font-weight: 400;
                margin: 0 2px;
                letter-spacing: 1px;
                &:before {
                    content: '(';
                }
                &:after {
                    content: ')';
                }
            }

            &:after {
                content: "";
                position: absolute;
                bottom: -8px;
                width: 70px;
                height: 2px;
                background-color: #110d2d;
                left: 0;right: 0;margin: 0 auto;
                transition-duration: 0.2s;
            }
            &:hover {
                cursor: pointer;
            }
            &:hover:after {
                width: 90px;
            }
        }

        .contact {
            p {
                margin: 4px 0;
            }
        }
    }

    .header .menu-reseaux {
        flex: 0;
    }
    
    @media screen and (max-width: 550px) {

        .header {
            z-index: 100;
            padding: 10px;
            left: 0;
            right: 0;
            box-sizing: border-box;
            
            .mobile-closer {
                display: block;
                position: absolute;
                right: 20px;
                top: 20px;
                p {
                    margin: 0;
                }
            }
        }
    }
</style>

<style lang="scss">
    .menu-reseaux {
        ul {
            display: flex;
       
            align-items: center;
            justify-content: center;

            li {
                flex-grow: 0;
                height: 28px;
                width: 28px;
                margin: 20px 10px;
            }
        }
        path  {
            fill: #110d2d;
        }
    }
</style>