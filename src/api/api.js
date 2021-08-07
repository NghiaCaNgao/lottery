import { createToastInterface } from "vue-toastification";
import AlertDefault from "@/components/AlertDefault.vue";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database"

class api {
    static generateID(length) {
        let lengthID = 6 || length;
        let ID = "";
        let pattern = "qwertyuiopasdfghjklzxcvbnm0123456789";
        for (let i = 0; i < lengthID; i++)
            ID = ID + pattern[Math.floor(Math.random() * 34)];
        return ID;
    }

    // Use toast notification with redesign ui
    static showNotificationDefault(title, text) {
        var content = {
            component: AlertDefault,
            props: {
                title,
                context: text,
            },
        };
        const toast = createToastInterface({ position: "top-center" });
        toast(content);
    }

    // Load current data user from firebase store 
    static async loadCurrentUserData(email) {
        var db = firebase.firestore();
        try {
            var query = await db.collection("users").where("email", "==", email).get();
            if (query.empty) return
            else return query.docs[0].data();
        } catch (error) {
            console.error(error);
            this.showNotificationDefault("Error", "Can not load user data")
        }
    }

    static createUser(email, name, image) {
        return {
            id: this.generateID(),
            email,
            name,
            image,
            nickname: null,
            color: "blue",
            hasNickname: false,
            darkmode: false,
        }
    }

    static async findOnlineUser(roomID, email) {
        var database = firebase.database();
        var baseRef = 'room/' + roomID + '/onlineUsers/';
        var emailExist = false;

        try {
            var data = await database.ref(baseRef).get();
            if (data.exists()) {
                var listUsers = data.val();
                for (let item in listUsers)
                    if (listUsers[item].email === email) emailExist = item;
            }
            return emailExist;
        } catch (error) {
            console.log(error);
        }
    }

    static async registerUser(user) {
        var db = firebase.firestore();
        var data = db.collection("users");
        var query = await data.where("email", "==", user.email).get();
        if (query.empty) data.add(user);
    }

    static async findUser(email) {
        var db = firebase.firestore();
        var data = db.collection("users");

        var userIDs = (
            await data.where("email", "==", email).get()
        ).docs.map((doc) => doc.id);

        return (userIDs.length > 0) ? userIDs[0] : undefined
    }

    static updateUser(userID, userData) {
        var db = firebase.firestore();
        var data = db.collection("users");
        data.doc(userID).update(userData);
    }

    static addOnlineUser(roomID, currentUser) {
        var database = firebase.database();
        var baseRef = 'room/' + roomID + '/onlineUsers/';

        var newPostKey = firebase.database().ref(dataRef).push().key;
        var dataRef = baseRef + newPostKey;
        database.ref(dataRef).set(currentUser);
    }

    static removeOnlineUser(roomID, userID) {
        var database = firebase.database();
        var dataRef = 'room/' + roomID + '/onlineUsers/' + userID;
        database.ref(dataRef).remove();
    }
    static removeOnlineUserOnDisconnect(roomID, userID) {
        var database = firebase.database();
        var dataRef = 'room/' + roomID + '/onlineUsers/' + userID;
        database.ref(dataRef).onDisconnect().remove();
    }

    static addHistory(roomID, currentUser, value, action) {
        var database = firebase.database();
        var baseRef = 'room/' + roomID + '/history/';
        var newPostKey = firebase.database().ref(baseRef).push().key;
        var dataRef = baseRef + newPostKey;

        var history = {
            id: this.generateID(),
            user: currentUser,
            action: {
                value,
                action,
            },
            timestamp: Date.now()
        }

        database.ref(dataRef).set(history);
    }

}

export default api;