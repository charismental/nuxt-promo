

export const state = () => ({
    user: null
})

export const actions = {
    login({commit}, formData) {
        return this.$axios.$post('/api/v1/users/login', formData)
            .then(user => {
                commit('SET_USER', user)
                console.log('success!', 'form data: ', formData, 'user: ', user)
                return user
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }
}

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}
// 1. Create Login Action
// 2. Expect to receive form data to login action
// 3. Send a POST request to '/api/v1/users/login' -> this.$axios.$post()
// 4. In case of success expect to recieve "user" object in "then" block
// 5. Bonus: In case of error "catch" error and return Promise.reject(error)
// 6. Create a mutation to set user to a state
// 7. Dispatch login action when clicking login button and debug this functionality to make sure you are setting user to a state