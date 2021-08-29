import { createToastInterface } from "vue-toastification";
import AlertDefault from "@@/components/AlertDefault.vue";
import Time from "./time";

class Extension {
  // Gen ID. Default gen with length = 6;
  static generateID() {
    const lengthID = 6;
    let ID = "";
    const pattern = "qwertyuiopasdfghjklzxcvbnm0123456789";
    for (let i = 0; i < lengthID; i++)
      ID = ID + pattern[Math.floor(Math.random() * 34)];
    return ID;
  }

  // Use toast notification with redesign ui
  static showNotification(type, title, text) {
    const data = {
      component: AlertDefault,
      props: {
        title,
        text
      }
    };
    const toast = createToastInterface({ position: "top-center" });
    if (type === "warning") toast.warning(data);
    else toast(data);
  }

  // Format time
  static formatTime(time) {
    return Time.logTimeInDay(time);
  }

  static toNow(time) {
    return Time.fromToNow(time);
  }
}

export default Extension;
