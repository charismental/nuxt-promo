export const state = () => ({
    items: []
})

export const actions = {
    fetchCourses({commit, state}) {
        return this.$axios.$get('/api/v1/products')
            .then(courses => {
                commit('SET_ITEMS', {
                    resource: 'course',
                    items: courses
                }, {root: true})
                return state.items
            })
    }
}