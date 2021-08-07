import Navbar from "@/components/Navbar.vue"

import swal from "sweetalert";
import api from "./api/api"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"

export default {
    name: "app",
    components: {
        Navbar
    },
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
        updateCurrentUser(user) {
            this.$store.commit("overrideCurrentUser", user);
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

        updateLabelsData() {
            var roomID = this.roomID;
            var users = firebase.database().ref('room/' + roomID + '/data/label');
            users.on('value', (snapshot) => {
                const data = snapshot.val();
                var listLabel = [];
                for (let el of data) if (el) listLabel.push(el);
                this.$store.commit("updateOptionsChart", listLabel)
            });
        },

        async addOnlineUser() {
            var roomID = this.roomID;
            var currentUser = this.currentUser;

            // add onlineUser
            var userID = await api.findOnlineUser(roomID, currentUser.email);
            if (userID === false) api.addOnlineUser(roomID, currentUser);

            // add history
            api.addHistory(roomID, currentUser, null, "come in");
        },

        async removeOnlineUser() {
            var roomID = this.roomID;
            var currentUser = this.currentUser;

            // remove online user
            var userID = await api.findOnlineUser(roomID, currentUser.email);
            if (userID) api.removeOnlineUserOnDisconnect(roomID, userID);

            // add history
            api.addHistory(roomID, currentUser, null, "come out")
        },

    },

    created() {
        // Initial firebase
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
            // if have signed in, fetch and pass data to currentUser
            if (user) {
                var data = await api.loadCurrentUserData(user.email);
                if (!data) {
                    api.showNotificationDefault("Account alert", "Setup default data user for this session");
                    data = api.createUser(user.email, user.displayName, user.photoURL);
                }
                api.showNotificationDefault("Welcome", "You are in the room");

                // Setup user
                this.updateCurrentUser(data);
                this.addOnlineUser();

                // Setup event on data change
                this.updateLabelsData();
                this.updateOnlineUser();
                this.updateHistory();

                // If not, alert notification and pass undefined to currentUser
            } else {
                this.updateCurrentUser({});

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

        // Warning on leave and push offline status;
        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            e.returnValue = '';

            // Set offline when leave
            this.removeOnlineUser();
        });


    },
};