import swal from "sweetalert";
import AlertDefault from "@/components/AlertDefault.vue";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"

export default {
    name: "app",
    computed: {
        currentUser: {
            get() {
                return this.$store.state.currentUser;
            },
        },

        roomID: {
            get() {
                return this.$store.state.roomID;
            }
        }
    },
    methods: {
        // Fnc lap
        showAlert(title, context) {
            var content = {
                component: AlertDefault,
                props: {
                    title,
                    context,
                },
            };

            this.$toast(content, { position: "top-center" });
        },

        generateID() {
            let ID = "";
            let pattern = "abcdefghijklmnopqestuvxyz0123456789";
            for (let i = 0; i < 6; i++)
                ID = ID + pattern[Math.floor(Math.random() * 34)];
            return ID;
        },

        registerCurrentUser(user) {
            this.$store.commit("overrideCurrentUser", user);
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

        async fetchCurrentUserData(email) {
            var db = firebase.firestore();
            try {
                var query = await db.collection("users").where("email", "==", email).get();
                if (query.docs.length === 0) return
                else return query.docs[0].data();
            } catch (error) {
                console.error(error);
            }
        },

        async checkExist(email, baseRef) {
            var database = firebase.database();
            var emailExist = false;
            try {
                var data = await database.ref(baseRef).get();
                if (data.exists()) {
                    var listUsers = data.val();
                    for (let item in listUsers) {
                        // console.log(listUsers[item].email, email, listUsers[item].email === email);
                        if (listUsers[item].email === email) emailExist = item;
                    }
                }
                return emailExist;
            } catch (error) {
                console.log(error);
            }
        },

        updateOnlineUser() {
            var roomID = this.roomID;
            var users = firebase.database().ref('room/' + roomID + '/onlineUsers');
            users.on('value', (snapshot) => {
                const data = snapshot.val();
                this.$store.commit("updateOnlineUser", data)
            });
        },

        updateHistory() {
            var roomID = this.roomID;
            var users = firebase.database().ref('room/' + roomID + '/history');
            users.on('value', (snapshot) => {
                const data = snapshot.val();
                this.$store.commit("updateHistory", data)
            });
        },

        async uploadStateAddOnlineUser() {
            var roomID = this.roomID;
            var currentUser = this.currentUser;
            var database = firebase.database();

            // OnlineUser
            var baseRefOnlUsr = 'room/' + roomID + '/onlineUsers/';
            var exist = await this.checkExist(currentUser.email, baseRefOnlUsr);
            if (exist === false) {
                var newPostKey = firebase.database().ref(dataRef).push().key;
                var dataRef = baseRefOnlUsr + newPostKey;
                database.ref(dataRef).set(currentUser);
            }

            // Hístory
            var baseRefHis = 'room/' + roomID + '/history/';
            var newPostKeyHis = firebase.database().ref(baseRefHis).push().key;
            var dataRefHis = baseRefHis + newPostKeyHis;

            var history = {
                id: this.generateID(),
                user: this.currentUser,
                action: {
                    value: null,
                    action: "comein"
                },
                timestamp: Date.now()
            }

            database.ref(dataRefHis).set(history);
        },

        async uploadStateRemoveOnlineUser() {
            var roomID = this.roomID;
            var email = this.currentUser.email;
            var database = firebase.database();
            var baseRef = "room/" + roomID + "/onlineUsers/";
            var exist = await this.checkExist(email, baseRef);
            if (exist) {
                var dataRef = baseRef + exist;
                console.log(dataRef);
                database.ref(dataRef).onDisconnect().remove();
            }
        },

    },

    created() {
        // Initial
        const firebaseConfig = {
            apiKey: "AIzaSyD_dtwhN0mXpznaMrLVPVIsCdirK5ViZ8U",
            authDomain: "lottery-ncn.firebaseapp.com",
            databaseURL: "https://lottery-ncn-default-rtdb.asia-southeast1.firebasedatabase.app/",
            projectId: "lottery-ncn",
            storageBucket: "lottery-ncn.appspot.com",
            messagingSenderId: "667286825039",
            appId: "1:667286825039:web:b7c1ba803f38632b37623a",
            measurementId: "G-6RQ03J7DLN",
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }

        // Check auth
        firebase.auth().onAuthStateChanged(async (user) => {
            // if have signed in, fetch pass data to currentUser
            if (user) {
                var data = await this.fetchCurrentUserData(user.email);
                if (!data) {
                    this.showAlert("Account alert", "Su dung du lieu mac dinh");
                    data = this.createUser(
                        user.email,
                        user.displayName,
                        user.photoURL);
                }
                this.registerCurrentUser(data);
                this.showAlert("Welcome", "You are in the room");
                this.uploadStateAddOnlineUser();
                this.updateOnlineUser();
                this.updateHistory();
                // If not, alert notification and pass undefined to currentUser
            } else {
                this.registerCurrentUser({});

                swal({
                    title: "Account alert",
                    text: "You must have signed in to continue",
                    icon: "info",
                    buttons: {
                        ok: {
                            text: "Login",
                            value: "ok",
                        },
                    },
                }).then((value) => {
                    // Navigate to user route and sign in
                    if (value === "ok" && this.$router.currentRoute.path !== "/user") {
                        this.$router.push("/user");
                    }
                });
            }
        });

        // Setup event

        // When leave
        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            e.returnValue = '';

            // Set offline when leave
            this.uploadStateRemoveOnlineUser();
        });


    },
};