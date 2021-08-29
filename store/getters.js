export default {
  isLoggedIn: state => {
    try {
      return state.authUser.uid !== null;
    } catch {
      return false;
    }
  },
  displayUser: state => {
    try {
      const { name, avatar, uid } = state.authUser;
      return { name, avatar, uid };
    } catch {
      return undefined;
    }
  }
};
