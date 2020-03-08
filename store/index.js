export const state = () => ({
    bottomLink: {
        name: "",
        link: ""
    },
    layoutName: 'home',
    selected: 0,
    projects: {
        uxdesign: {
            name: "UX Design",
            date: "Février 2020",
            image: "MOKEUPPOS.png",
            tags: ["DEV","VUE JS","WEB"]
        },
        elenakoutouldis: {
            name: "Elena Koutouldis",
            date: "Janvier 2020",
            image: "ElenaKoutoulidis.png",
            tags: ["NUXT JS","STORYBLOK","STRIPE"]
        },       
        museum: {
            name: "Musée Virtuel",
            date: "Janvier 2020",
            image: "MuéeVirtuel Miniature.png",
            tags: ["RUBY ON RAILS"]
        },
        quizapp: {
            name: "Quiz App",
            date: "Février 2018",
            image: "QuizMadrid.png",
            tags: ["DEV","ANDROID STUDIO"]
        },
        ecroc: {
            name: "Ecroc",
            date: "Mai 2019",
            image: "ecroc.png",
            tags: ["DEV","PHP"]
        }
    }
})

export const getters = {
    projectsList: (state) => {
        let projects = state.projects;
        let list =  Object.values(projects);
        let i = 0;
        for(let path in projects) {
            list[i].path = path;
            i++;
        }
        return list;
    },
    selected: (state) => {
        return state.selected;
    }
} 

export const mutations = {
    defineBottomLink (state, bottomLink) {
      state.bottomLink = bottomLink;
    },
    layoutName (state, type) {
        state.layoutName = type;
    },
    selectProject(state, number) {
        state.selected = number;
    }
}