export const state = () => ({
    bottomLink: {
        name: "",
        link: ""
    }
})

export const mutations = {
    defineBottomLink (state, bottomLink) {
      state.bottomLink = bottomLink;
    }
}