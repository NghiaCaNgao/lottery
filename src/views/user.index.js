import firebase from "firebase/app";
import "firebase/auth";
import api from "../api/api";
import FormUserData from "../components/FormUserData.vue";


export default {
    name: "user",
    components: {
        FormUserData,
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                image: "./image/128.png"
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
        signinAction() {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    let data = result.additionalUserInfo.profile;
                    let user = api.createUser(data.email, data.name, data.picture);
                    api.registerUser(user);
                })
                .catch((error) => {
                    console.log(error);
                    this.showAlert("Error", "Error when Signing");
                });
        },
    },
};