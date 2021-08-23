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
      const { name, avatar } = state.authUser;
      return { name, avatar };
    } catch {
      return undefined;
    }
  }
};
