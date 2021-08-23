import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
// import { createToastInterface } from "vue-toastification";
// import AlertDefault from "../components/AlertDefault.vue";
import User from "./user";

class Auth {
  // Check login
  static isLogin() {
    return !!firebase.auth().currentUser;
  }

  // deleteAccount
  static deleteAccount() {
    alert("Chua co gi");
  }

  // resetPassword
  static resetPassword() {
    alert("Chua co gi");
  }

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
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          console.log(result);
        });
    } catch (error) {
      console.error(error);
    }
  }

  // Sign in
  static async signIn(method, user) {
    try {
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
            .then(result => {
              const data = result.additionalUserInfo.profile;
              const user = User.createUser(data.email, data.name, data.picture);
              User.registerUser(user);
            });
          break;
        }
        // Sign in with Facebook Account
        case "facebook": {
          const provider = new firebase.auth.FacebookAuthProvider();

          await firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
              // const data = result.additionalUserInfo.profile;
              // const user = User.createUser(data.email, data.name, data.picture);
              // User.registerUser(user);
            });
          break;
        }
        default:
          throw new Error("Invalid provider sign in method");
      }
    } catch (error) {
      console.error(error);
    }
  }
}
export default Auth;
