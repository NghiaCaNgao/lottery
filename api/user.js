import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import Extension from "./extensions"
// import { createToastInterface } from "vue-toastification";
// import AlertDefault from "../components/AlertDefault.vue";

class User {
    // Register user in firebase store
    static async registerUser(user) {
        const db = firebase.firestore();
        const data = db.collection("users");
        const query = await data.where("email", "==", user.email).get();
        if (query.empty) data.add(user);
    }

    // search user firebaseStore
    static async findUser(email) {
        const db = firebase.firestore();
        const data = db.collection("users");

        const userIDs = (
            await data.where("email", "==", email).get()
        ).docs.map((doc) => { return doc.id });

        return (userIDs.length > 0) ? userIDs[0] : undefined
    }

    // Load current data user from firebase store
    static async loadCurrentUserData(email) {
        const db = firebase.firestore();
        try {
            const query = await db.collection("users").where("email", "==", email).get();
            if (query.empty) return
            else return query.docs[0].data();
        } catch (error) {
            console.error(error);
            Extension.showNotificationDefault("Error", "Can not load user data")
        }
    }

    // Update user firebaseStore
    static updateUser(userID, userData) {
        const db = firebase.firestore();
        const data = db.collection("users");
        data.doc(userID).update(userData);
    }

    // Initial user data object
    static createUser(email, name, image) {
        return {
            id: Extension.generateID(),
            email,
            name,
            image,
            nickname: null,
            color: "blue",
            hasNickname: false,
            darkmode: false,
        }
    }
}

export default User;
