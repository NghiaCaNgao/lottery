export default {
  async nuxtServerInit({ dispatch }, ctx) {
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user;
      await dispatch("onAuthStateChanged", {
        authUser,
        claims
      });
    }
  },

  onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      commit("RESET_STORE");
      return;
    }
    // if (authUser && authUser.getIdToken) {
    //   try {
    //     const idToken = await authUser.getIdToken(true);
    //     console.info("idToken", idToken);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    commit("SET_AUTH_USER", { authUser, claims });
  }
};
