class Extension {
    // Gen ID. Default gen with length = 6;
    static generateID(length) {
        const lengthID = (length) ? 6 : length;
        let ID = "";
        const pattern = "qwertyuiopasdfghjklzxcvbnm0123456789";
        for (let i = 0; i < lengthID; i++)
            ID = ID + pattern[Math.floor(Math.random() * 34)];
        return ID;
    }

    // Use toast notification with redesign ui
    static showNotificationDefault(title, text) {
        const content = {
            component: AlertDefault,
            props: {
                title,
                context: text,
            },
        };
        const toast = createToastInterface({ position: "top-center" });
        toast(content);
    }
}

export default Extension; 