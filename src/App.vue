<template>
  <el-container class="app">
    <el-header>
      <div class="navbar flex-between">
        <div class="navbar__left">
          <div class="logo">
            <img src="./assets/logo.png" height="32px" />
          </div>
          <h1>Happy Loterry</h1>
        </div>
        <div class="navbar__link">
          <router-link to="/">Play</router-link>
          <router-link to="/create">Create</router-link>
        </div>
        <div class="navbar__tool">
          <router-link to="/user" class="userdata flex-center">
            <div class="icon">
              <el-avatar size="small" :src="currentUser.image"></el-avatar>
            </div>
            <div class="username">{{ currentUser.name }}</div></router-link
          >
          <button role="btn">
            <unicon name="qrcode-scan"></unicon>
          </button>
          <button role="btn">
            <unicon name="share"></unicon>
          </button>
        </div>
      </div>
    </el-header>
    <el-main>
      <transition
        appear
        name="fade"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import swal from "sweetalert";
import AlertDefault from "@/components/AlertDefault.vue";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// var db = firebase.firestore();

export default {
  name: "app",
  computed: {
    currentUser: {
      get() {
        return this.$store.state.currentUser;
      },
    },
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

    registerCurrentUser(user) {
      this.$store.commit("updateCurrentUser", user);
    },

    uploadUserData(user) {
      console.log(user);
      // db.collection("users")
      //   .add(user)
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });
    },
  },
  created() {
    // Intial
    const firebaseConfig = {
      apiKey: "AIzaSyD_dtwhN0mXpznaMrLVPVIsCdirK5ViZ8U",
      authDomain: "lottery-ncn.firebaseapp.com",
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

    // Check user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.registerCurrentUser({
          name: user.displayName,
          image: user.photoURL,
          uid: user.uid,
          email: user.email,
          hasUser: true,
        });
        this.uploadUserData();
        this.showAlert("Wellcome", "You are in the room");
      } else {
        this.registerCurrentUser({
          name: "Unknow",
          image: undefined,
          uid: undefined,
          email: undefined,
          hasUser: false,
        });
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
          if (value === "ok" && this.$router.currentRoute.path !== "/user") {
            this.$router.push("/user");
          }
        });
      }
    });
  },
};
</script>

<style lang="scss">
@import "./style.scss";
@import "./theme.css";
</style>