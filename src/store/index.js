import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turns: 10,
    onlineUser: [
      {
        id: "123",
        hasNickname: false,
        hasImage: false,
        hasIcon: true,
        name: "abc,xyz",
        nickname: "bo cap chua",
        image:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
        icon: "feedback",
        shortName: "BC",
        color: "blue",
        comeinTime: 1628006700096,
      },
      {
        id: "456",
        hasNickname: false,
        hasImage: true,
        hasIcon: false,
        name: "abc,xyz",
        nickname: "bo cap chua",
        image:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
        icon: "feedback",
        shortName: "BC",
        color: "blue",
        comeinTime: 1628006700096,
      },
      {
        id: "789",
        hasNickname: true,
        hasImage: false,
        hasIcon: false,
        name: "abc,xyz",
        nickname: "bo cap chua",
        image:
          "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
        icon: "feedback",
        shortName: "BC",
        color: "blue",
        comeinTime: 1628006700096,
      },
    ],
    history: [
      {
        id: "abc",
        user: {
          id: "123",
          hasNickname: false,
          hasImage: false,
          hasIcon: true,
          name: "abc,xyz",
          nickname: "bo cap chua",
          image:
            "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
          icon: "feedback",
          shortName: "BC",
          color: "blue",
          comeinTime: 1628006700096,
        },
        action: {
          value: "",
          action: "comein",
        },
        timestamp: 1628041002684,
      },
    ],
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
  },
  mutations: {
    changeForce(state, value) {
      state.force = value;
    },
    changeTurn(state, value) {
      state.turns = value
    }
  },
  actions: {
    updateForce() {
      this.commit("changeForce");
    }
  },
  modules: {
  }
})
