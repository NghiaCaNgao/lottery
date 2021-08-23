import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import Extension from "./extensions";

class User {
  // Initial user data object
  static createUser(result) {
    const {
      uid,
      email,
      displayName,
      emailVerified,
      photoURL,
      providerData
    } = result;

    return {
      uid,
      email,
      name: displayName,
      verified_email: emailVerified,
      provider: providerData[0].providerId,
      avatar: photoURL,
      nickname: null,
      color: "blue",
      hasNickname: false,
      darkmode: false,
      history: [],
      games: []
    };
  }

  // Register user in firebase store
  static async registerUser(authData) {
    const profile = this.createUser(authData);
    const db = firebase.firestore();
    const data = db.collection("users");
    const query = await data.where("uid", "==", profile.uid).get();
    if (query.empty) data.add(profile);
  }

  // deleteAccount
  static deleteAccount() {
    alert("Chua co gi");
  }

  // resetPassword
  static resetPassword() {
    alert("Chua co gi");
  }

  // search user firebaseStore
  static async findDocUserID(uid) {
    const db = firebase.firestore();
    const data = db.collection("users");
    const userIDs = (await data.where("uid", "==", uid).get()).docs.map(doc => {
      return doc.id;
    });

    return userIDs.length > 0 ? userIDs[0] : undefined;
  }

  // Load current data user from firebase store
  static async loadCurrentUserData(uid) {
    const db = firebase.firestore();
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", uid)
        .get();
      if (query.empty) return;
      else return query.docs[0].data();
    } catch (error) {
      console.error(error);
      Extension.showNotification("warning", error, "Can not load user data");
    }
  }

  // Update user firebaseStore
  static async updateUser(uid, userData) {
    const db = firebase.firestore();
    const data = db.collection("users");
    const docID = await this.findDocUserID(uid);
    console.log(docID, userData);
    await data.doc(docID).update(userData);
  }
}
export default User;
