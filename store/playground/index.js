export const state = () => ({
  views: {
    info: true,
    onlineUser: true,
    chat: true,
    history: true,
    rule: true
  },
  onlineUsers: null,
  history: null,
  roomHeader: null,
  messages: null
});

export const mutations = {
  updateViews(state, view) {
    state.views[view] = !state.views[view];
  },
  updateOnlineUsers(state, value) {
    state.onlineUsers = value;
  },
  updateHistory(state, value) {
    state.history = value;
  },
  updateRoomHeader(state, value) {
    state.roomHeader = value;
  },
  updateMessage(state, { data, uid }) {
    const newMap = [];
    for (const key in data) {
      newMap.push({
        ...data[key],
        isMe: data[key].user.uid === uid
      });
    }
    state.messages = newMap;
  }
};
