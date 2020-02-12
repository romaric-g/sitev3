<template>
    <div class="container center">
      <div id="projects">
        <h2>MES PROJETS</h2>
        <div class="projects-nav">
          <div>
            <span></span>
            <div>
              <ul>
                <li 
                  is="project-element" 
                  v-for="(project, index) in projects" 
                  :key="index"
                  :class="selected === index ? 'active' : ''" 
                  :number="index" 
                  v-on:select="selectProject(index)">
                </li>
              </ul>
            </div>
            <span></span>
          </div>
        </div>
        <div class="illustration">
          <project-picture v-for="(project, index) in projects" :key="index" :index="index" :sel="selected" :project="project"></project-picture>
        </div>
        <div class="projects-interact">
          <div class="content">
            <div class="title">
              <p>{{ title }}</p>
            </div>
            <div class="buttons">
              <button @click="backProject" class="left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <router-link tag="button" :to="'project/' + this.selected" class="go">DÉCOUVRIR</router-link>
            <button @click="nextProject" class="right">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import ProjectElement from "@/components/projects/ProjectElement.vue"
import ProjectPicture from "@/components/projects/ProjectPicture.vue"
import { mapMutations } from 'vuex'

export default {
    components: { ProjectElement, ProjectPicture },
    data() {
        return {
          projects: [
            {
                title: "Speed And Addict",
                img_src: "./src/assets/images/speedandaddict.png"
            },
            {
                title: "Ecroc",
                img_src: "./src/assets/images/ecroc.gif"
            },
            {
                title: "Quiz Madrid",
                img_src: "./src/assets/images/quizmadrid.jpg"
            },
            {
                title: "Motion design",
                img_src: "./src/assets/images/motion.png"
            },
            {
                title: "Univers",
                img_src: "./src/assets/images/univers.jpg"
            },
            {
                title: "Mobile douche",
                img_src: "./src/assets/images/mobiledouche.png"
            },    {
                title: "Site personnel",
                img_src: "./src/assets/images/siteperso.png"
            }
        ],
        selected: 0
        }
    },        
    computed: {
        title: function () {
            return this.projects[this.selected].title.toUpperCase();
        }
    },
    methods: {
        selectProject(number) {
            this.selected = number;
        },
        nextProject(){
            if(this.selected+1 < this.projects.length){
                this.selected++;
            }
        },
        backProject(){
            if(this.selected > 0){
                this.selected--;
            }
        }
    },
    watch: {
        selected: (newV, oldV) => {
            
        }
    },
    fetch ({ store, params }) {
        console.log("test");
        store.commit('defineBottomLink', {name:"À propos", link:"/about"});
    },
    
    transition: {
        name: 'bounce',
        mode: 'out-in'
    }
}
</script>

<style lang="scss">
#projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 80vw;
    max-width: 100vh;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

#projects h2 {
    text-align: center;
    color: white;
    font-size: 3.2em;
    font-weight: bold;
    margin: 0;
}

#projects .projects-nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

#projects .projects-nav ul li {
    position: relative;
    display: block;
    height: 35px;
    width: 35px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
}
#projects .projects-nav ul li.active {
    margin: 0 7px;
}

#projects .projects-nav ul li p {
    margin: 0;
    padding: 0;
    transform: scale(0);
}

#projects .projects-nav ul li.active p {
    transform: scale(1);
    font-size: 1.2em;
}

#projects .projects-nav ul li::before {
    content: "";
    position: absolute;
    display: block;
    transform: rotate(45deg);
    border: 1px solid white;
    height: 17px;
    width: 17px;
    transition-duration: 0.4s;
}

#projects .projects-nav ul li:not(.active):hover::before {
    background-color: white;
    transform: rotate(45deg);
    height: 20px;
    width: 20px;
}

#projects .projects-nav ul li.active::before {
    border: 2px solid white;
    height: 25px;
    width: 25px;
}


#projects .projects-nav div {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

#projects .projects-nav div div {
    margin: 0 10px;
}

#projects .projects-nav span {
    flex: 1;
    height: 2px;
    background-color: white;
    display: block;
}

#projects div.projects-interact {
    position: relative;
    height: 30px
}

#projects div.projects-interact .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

#projects div.projects-interact .buttons {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

#projects div.projects-interact .title {
    position: relative;
}

#projects div.projects-interact p {
    text-align: center;
    color: white;
    font-size: 3em;
    font-weight: bold;
    line-height: 1em;
    letter-spacing: 2px ;
    margin: 10px;
}

#projects div.projects-interact button.go {
    width: calc(100% / 3);
    height: 55px;
    background-color: white;
    border: none;
    text-transform:uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 1.1em;
    font-family : inherit;
    color: #110D2D;
}


#projects div.projects-interact button:not(.go)  {
    height: 45px;
    width: 45px;
    background-color: #f3f3f3;
    border: none;
    margin: 0 8px;
    flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#projects div.projects-interact button:not(.go) svg * {
    stroke: #110D2D;
}

/* PROJECTS IMAGE */

#projects div.illustration {
    position: relative;
    flex: 1;
    overflow: hidden;
    background-color: white;
}

#projects .imageBox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}

#projects .imageBox img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition-duration: 0.4s;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition-duration: 0.3s;
}

#projects .imageBox img.up {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}

/*  MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE */

@media screen and (max-width: 550px) {
    /* CONTENT */
    #projects { 
        max-height: unset;
    }

    #projects.container {
        display: flex;
        max-height: unset;
    }

    #projects .projects-nav ul li {
        height: 28px;
        width: 28px;
    }

    #projects .projects-nav ul li.active p {
        font-size: 1em;
    }

    #projects .projects-nav ul li::before {
        height: 14px;
        width: 14px;
    }

    #projects .projects-nav ul li.active::before {
        height: 20px;
        width: 20px;
    }

    #projects .projects-nav span {
        display: none;
    }

    #projects .projects-nav div {
        padding: 4px 0;
    }

    #projects .projects-nav div div {
        margin: 0 auto;
    }

    #projects div.illustration {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    
    #projects div.projects-interact {
        position: relative;
        flex: 1;
    }

    #projects div.projects-interact .content {
        bottom: 40px;
    }
    
    #projects div.projects-interact .content .title p{
        font-size: 1.5em;
    }

    #projects div.projects-interact button.go {
        width: 200px;
        flex-shrink: 1;
    }

    #projects div.projects-interact button:not(.go) {
        height: 55px;
        width: 35px;
    }
    
    #projects .content h2 {
        font-size: 2.2em;
    }
}
</style>
