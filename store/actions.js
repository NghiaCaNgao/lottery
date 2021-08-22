export default {
  async nuxtServerInit({ dispatch }, ctx) {
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      // console.log(ctx.res.locals.user);
      const { allClaims: claims, ...authUser } = ctx.res.locals.user;
      // console.info(
      //   'Auth User verified on server-side. User: ',
      //   authUser,
      //   'Claims:',
      //   claims
      // )
      await dispatch("onAuthStateChanged", {
        authUser,
        claims
      });
    }
  },

  async onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      commit("RESET_STORE");
      return;
    }
    if (authUser && authUser.getIdToken) {
      try {
        const idToken = await authUser.getIdToken(true);
        console.info("idToken", idToken);
      } catch (e) {
        console.error(e);
      }
    }
    commit("SET_AUTH_USER", { authUser, claims });
  },

  checkVuexStore(ctx) {
    if (this.$fire.auth === null) {
      throw new Error(
        "Vuex Store example not working - this.$fire.auth cannot be accessed."
      );
    }

    alert(
      "Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___"
    );
  }
};
