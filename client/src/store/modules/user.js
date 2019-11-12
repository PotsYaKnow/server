const state = {
  token: null,
  user: null,
  isUserLoggedIn: false
}

const mutations = {
  setToken(state, token) {

    state.token = token
    if (token) {
      state.isUserLoggedIn = true
    } else {
      state.isUserLoggedIn = false
    }
  },
  setUser(state, user) {
    state.user = user
  },
  resetState(state)
  {
    Object.keys(state).forEach(key => {
      state[key] = null
    })
  }
}


const actions = {
  setToken({ commit, state }, token) {
    commit('setToken', token)
  },
  setUser({ commit, state }, user) {
    commit('setUser', user)
  },
  logout({ commit, state }) {
    commit('resetState')
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}
