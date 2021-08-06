import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turns: 10,
    roomID: "123",
    onlineUsers: {},
    history: {},
    lastUserPlay: {
      id: "123",
      hasNickname: false,
      hasImage: true,
      hasIcon: true,
      name: "abc,xyz",
      nickname: "bo cap chua",
      image:
        "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
      icon: "feedback",
      shortName: "BC",
      color: "blue",
    },

    currentUser: {
      id: null,
      email: null,
      name: null,
      image: null,
      nickname: null,
      color: "blue",
      hasUser: false,
      hasNickname: false,
      darkmode: false
    }
  },
  mutations: {
    changeTurn(state, value) {
      state.turns = value
    },

    overrideCurrentUser(state, user) {
      state.currentUser.id = user.id
      state.currentUser.email = user.email
      state.currentUser.name = user.name
      state.currentUser.image = user.image
      state.currentUser.nickname = user.nickname
      state.currentUser.color = user.color
      state.currentUser.hasNickname = user.hasNickname;
      state.currentUser.darkmode = user.darkmode;
      state.currentUser.hasUser = (user.email) ? true : false;
    },

    updateCurrentUser(state, user) {
      state.currentUser.nickname = user.nickname || state.nickname;
      state.currentUser.color = user.color || state.color;
      state.currentUser.hasNickname = user.hasNickname;
      state.currentUser.darkmode = user.darkmode;
      state.currentUser.hasUser = (user.email) ? true : false;
    },

    updateOnlineUser(state, users) {
      state.onlineUsers = users;
    },

    updateHistory(state, history) {
      state.history = history;
    }
  },
})
