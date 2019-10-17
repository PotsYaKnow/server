const state = {
  token: null,
  user: null,
  isUserLoggedIn: false
}

const initialState = state


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
  logout(state) {
    Object.keys(state).forEach(key => {
      Object.assign(state[key], initialState[key])
    })

  }
}


const actions = {
  setToken({ commit, state}, token) {
    commit('setToken', state.token, token)
  },
  setUser({ commit, state}, user) {
    commit('setUser', state.user, user)
  },
  logout({ commit, state}) {
    commit('logout', state)
  }
}


export default {
  namespaced: true,
  state,
  initialState,
  actions,
  mutations
}
