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
        strawmylife: {
            name: "Straw My Life",
            description: "Dans le cadre du DUT MMI à Bordeaux, nous avons pour objectif de créer une entreprise de notre choix.",
            date: "Octobre 2019",
            image: "557be385512849.5daaefd9c3c58.jpg",
            tags: ["DEV","DESIGN","WEB"]
        },
        ecroc: {
            name: "Ecroc",
            date: "Février 2019",
            image: "48333b9fff902fa8cfbc5f26c2a1688f.jpg",
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
        console.log(list)
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
        console.log(number)
        console.log("CHANGE SELECTED PROJECT")
        state.selected = number;
    }
}