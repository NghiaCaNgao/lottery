export const state = () => ({
  views: {
    info: true,
    onlineUser: false,
    chat: false,
    history: false,
    rule: false
  }
});

export const mutations = {
  updateViews(state, view) {
    console.log(view);
    state.views[view] = !state.views[view];
  }
};
