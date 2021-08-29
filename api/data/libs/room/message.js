import firebase from "firebase/app";
import "firebase/database";
import Extension from "../extension";

class Message {
  // add message
  static async addMessage(
    roomID,
    { name = null, uid = null, avatar = null },
    messageText
  ) {
    const database = firebase.database();
    const baseRef = "room/" + roomID + "/messages/";
    const message = {
      id: Extension.generateID(),
      user: {
        name,
        uid,
        avatar
      },
      messageText,
      timestamp: Date.now()
    };
    await database
      .ref(baseRef)
      .push()
      .set(message);
  }

  //   get message
  static listenData(roomID, uid) {
    const database = firebase.database();
    const dataRef = "room/" + roomID + "/messages/";
    database.ref(dataRef).on("value", snapshot => {
      const data = snapshot.val();
      this.$store.commit("playground/updateMessage", { data, uid });
    });
  }
}

export default Message;
