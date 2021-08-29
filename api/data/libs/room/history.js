import firebase from "firebase/app";
import "firebase/database";
import Extension from "../extension";
class History {
  // Add history
  static action = {
    LOGIN: "login",
    LOGOUT: "logout"
  };

  static async addHistory(
    roomID,
    { name = null, uid = null, avatar = null },
    { value = null, action = null }
  ) {
    const database = firebase.database();
    const baseRef = "room/" + roomID + "/history/";
    const history = {
      id: Extension.generateID(),
      user: {
        name,
        uid,
        avatar
      },
      action: {
        value,
        action
      },
      timestamp: Date.now()
    };

    await database
      .ref(baseRef)
      .push()
      .set(history);
  }

  static listenData(roomID) {
    const database = firebase.database();
    const dataRef = "room/" + roomID + "/history/";
    database.ref(dataRef).on("value", snapshot => {
      const data = snapshot.val();
      this.$store.commit("playground/updateHistory", data);
    });
  }
}

export default History;
