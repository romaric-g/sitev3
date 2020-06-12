export const state = () => ({
    bottomLink: {
        name: "",
        link: ""
    },
    layoutName: 'home',
    selected: 0
})

export const getters = {
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