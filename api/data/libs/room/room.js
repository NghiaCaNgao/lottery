import firebase from "firebase/app";
import "firebase/database";
import swal from "sweetalert";

class RoomData {
  static async isExist(roomID) {
    const database = firebase.database();
    const ref = "room/" + roomID;
    try {
      const data = await database.ref(ref).get();
      return data.exists();
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async getInfo(roomID) {
    const database = firebase.database();
    const ref = "room/" + roomID + "/header";
    try {
      const data = await database.ref(ref).get();
      return data.val();
    } catch (e) {
      console.error(e);
    }
  }

  // Check valid roomID
  static async isValidRoom(roomID) {
    if (!roomID) throw new Error("Input not found");
    else if (roomID.trim() === "") throw new Error("Input blank");
    else if (/\D/gi.test(roomID)) throw new Error("Input must be numberic");
    else if (roomID.length !== 6) throw new Error("Must be 6 numbers");
    else if (!(await this.isExist(roomID))) {
      throw new Error("May be the room have not created. Please try again");
    } else return true;
  }

  static async isValidRoomWithAlert(roomID) {
    if (!roomID)
      this.showNotification("warning", "Input wrong", "Input not found");
    else if (roomID.trim() === "")
      this.showNotification("warning", "Input wrong", "Input blank");
    else if (/\D/gi.test(roomID))
      this.showNotification("warning", "Input wrong", "Input must be numberic");
    else if (roomID.length !== 6)
      this.showNotification("warning", "Input wrong", "Must be 6 numbers");
    else if (!(await this.isExist(roomID))) {
      swal(
        "Invalid room ID",
        "May be the room have not created. Please try again",
        "warning"
      );
    } else return true;
  }
}

export default RoomData;
