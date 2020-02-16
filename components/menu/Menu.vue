<template>
    <header :class="{open: open}">
        <nav>
            <ul>
                <li>
                    <p class="nav-title">Projets<span class="count">7</span></p>
                    <ul>
                        <li>StrawMyLife</li>
                        <li>Elena Koutoulidis</li>
                        <li>Ecroc</li>
                        <li>QuizMadrid</li>
                        <li>Mobile'douche</li>
                    </ul>
                </li>
                <li>
                    <p class="nav-title">À propos</p>
                </li>
                <li>
                    <p class="nav-title">Contact</p>
                    <div class="contact">
                        <p>contact@romaricgauzi.com</p>
                        <p>07 83 06 62 31</p>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="menu-reseaux">
            <Reseaux></Reseaux>
        </div>
    </header>
</template>

<script>

import Reseaux from "@/components/common/Reseaux.vue";

export default {
    props: ["open"],
    components: {Reseaux}
}
</script>

<style lang="scss" scoped>
    header {
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
    }
    header.open {
        transform: translateX(0)
    }

    //HEADER SECTIONS

    header nav {
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
            }
        }

        .nav-title {
            position: relative;
            display: inline-block;
            font-size: 1.8em;
            letter-spacing: 4px;
            text-transform: uppercase;
            font-weight: 500;
            
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
            }
        }

        .contact {
            p {
                margin: 4px 0;
            }
        }
    }

    header .menu-reseaux {
        flex: 0;
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