class Time {
  static getStartToday() {
    const now = new Date();
    const r =
      now.getFullYear().toString() +
      "-" +
      now.getMonth().toString() +
      "-" +
      now.getDate().toString();
    return new Date(r).getTime();
  }

  static isInToday(time) {
    return time >= this.getStartToday();
  }

  static logTimeInDay(time) {
    const t = new Date(time);
    const min = t.getMinutes();
    const hour = t.getHours();
    return `${hour < 10 ? "0" + hour.toString() : hour.toString()}:${
      min < 10 ? "0" + min.toString() : min.toString()
    }`;
  }

  static logTimeYesterday(time) {
    return this.logTimeInDay(time) + " yesterday";
  }

  static logTimeInWeek(time) {
    const t = new Date(time);
    const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return this.logTimeInDay(time) + " " + names[t.getDay()];
  }

  static getTime(time) {
    const t = new Date(time);
    return t.getDate() + "/" + t.getMonth() + "/" + t.getFullYear();
  }

  static fromToNow(time) {
    const now = Date.now();
    const t = Math.floor((now - time) / 1000);
    if (t < 60) return "less than 1 minute";
    else if (t < 3600) return `${Math.floor(t / 60)} minutes ago`;
    else if (t < 86400) return `${Math.floor(t / 3600)} hours ago`;
    else if (t < 2592000) return `${Math.floor(t / 86400)} days ago`;
    else if (t < 31104000) return `${Math.floor(t / 2592000)} months ago`;
    else return `${Math.floor(t / 31104000)} years ago`;
  }
}

export default Time;
