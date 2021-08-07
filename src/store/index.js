import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turns: 10,
    roomID: "123",
    onlineUsers: {},
    history: {},
    lastUserPlay: {},

    series: [],
    labels: [],

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
      state.currentUser.nickname = (user.nickname) ? user.nickname : null;
      state.currentUser.color = user.color;
      state.currentUser.hasNickname = user.hasNickname;
      state.currentUser.darkmode = user.darkmode;
      state.currentUser.hasUser = (user.email) ? true : false;
    },

    updateOnlineUser(state, users) {
      state.onlineUsers = users;
    },

    updateHistory(state, history) {
      state.history = history;
    },

    updateOptionsChart(state, labels) {
      state.labels = labels;
      var p = [];
      for (let i = 0; i < labels.length; i++) p.push(1);
      state.series = p;
    }
  },
})
