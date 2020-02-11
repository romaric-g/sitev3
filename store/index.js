export const state = () => ({
    bottomLink: {
        name: "",
        link: ""
    }
})

export const mutations = {
    defineBottomLink (state, name, link) {
      state.bottomLink = {name: name, link: link};
    }
}