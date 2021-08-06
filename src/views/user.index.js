import firebase from "firebase/app";
import FormUserData from "../components/FormUserData.vue";

import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var db = firebase.firestore();
export default {
    name: "user",
    components: {
        FormUserData,
    },
    data() {
        return {
            form: {
                name: "nghia",
                email: "nghia@",
                image:
                    "https://lh3.googleusercontent.com/a-/AOh14GiAELphYFEnEVdpRSn_P8n8OJs1knRGn6xnvlYv=s96-c",
            },
        };
    },

    computed: {
        currentUser: {
            get() {
                return this.$store.state.currentUser;
            },
        },
    },

    methods: {
        generateID() {
            let ID = "";
            let pattern = "abcdefghijklmnopqestuvxyz0123456789";
            for (let i = 0; i < 6; i++)
                ID = ID + pattern[Math.floor(Math.random() * 34)];
            return ID;
        },

        async uploadUser(user) {
            var data = db.collection("users");
            try {
                var query = await data.where("email", "==", user.email).get();
                if (query.docs.length === 0) {
                    data
                        .add(user)
                        .then((docRef) => {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                }
            } catch (e) {
                console.log(e);
            }
        },

        createUser(email, name, image) {
            var user = {
                id: this.generateID(),
                email,
                name,
                image,
                nickname: null,
                color: "blue",
                hasNickname: false,
                darkmode: false,
            };
            return user;
        },

        signinAction() {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    let data = result.additionalUserInfo.profile;
                    let user = this.createUser(data.email, data.name, data.picture);
                    this.uploadUser(user);
                })
                .catch((error) => {
                    console.log(error);
                    this.showAlert("Error", "Error when Signing");
                });
        },
    },
};