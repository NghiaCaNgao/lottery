import firebase from "firebase/app";
import "firebase/database";

class OnlineUser {
  // Search onlineUser
  static async findOnlineUser(roomID, userID) {
    const database = firebase.database();
    const baseRef = "room/" + roomID + "/users/" + userID;

    try {
      const doc = await database.ref(baseRef).get();
      return doc.exists();
    } catch (error) {
      console.log(error);
    }
  }

  // Add an online User
  static async addOnlineUser(roomID, { name, avatar, uid }) {
    try {
      const database = firebase.database();
      const baseRef = "room/" + roomID + "/users/" + uid;

      const user = {
        name,
        avatar,
        uid
      };

      const doc = database.ref(baseRef);
      if (!(await doc.get()).exists()) {
        await database.ref(baseRef).set(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Remove an online User
  static async removeOnlineUser(roomID, userID) {
    const database = firebase.database();
    const dataRef = "room/" + roomID + "/users/" + userID;
    await database.ref(dataRef).remove();
  }

  // Remove an online User when disconnect
  static removeOnlineUserOnDisconnect(roomID, userID) {
    const database = firebase.database();
    const dataRef = "room/" + roomID + "/users/" + userID;
    database
      .ref(dataRef)
      .onDisconnect()
      .remove();
  }

  static listenData(roomID) {
    const database = firebase.database();
    const dataRef = "room/" + roomID + "/users/";

    database.ref(dataRef).on("value", snapshot => {
      const data = snapshot.val();
      this.$store.commit("playground/updateOnlineUsers", data);
    });
  }
}

export default OnlineUser;
