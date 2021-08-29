import firebase from "firebase/app";
import User from "../user";
import "firebase/auth";

class Auth {
  // logout current user
  static async signOut() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }

  // Sign up an account
  static async signUp({ email, password }) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        User.registerUser(result.user);
      });
  }

  // Sign in
  static async signIn(method, user) {
    switch (method) {
      //   Sign in with Email and password
      case "email": {
        const { email, password } = user;
        await firebase.auth().signInWithEmailAndPassword(email, password);
        break;
      }
      // Sign in with Google Account
      case "google": {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase
          .auth()
          .signInWithPopup(provider)
          .then(async result => {
            await User.registerUser(result.user);
          });
        break;
      }
      // Sign in with Facebook Account
      case "facebook": {
        const provider = new firebase.auth.FacebookAuthProvider();
        await firebase
          .auth()
          .signInWithPopup(provider)
          .then(async result => {
            await User.registerUser(result.user);
          });
        break;
      }
      default:
        throw new Error("Invalid provider sign in method");
    }
  }
}
export default Auth;
