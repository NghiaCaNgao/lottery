<template>
  <div class="page">
    <!-- manage user  -->
    <div
      v-if="currentUser.hasUser"
      class="panel user-info flex-col animate__animated animate__bounceIn"
    >
      <button
        role="btn"
        class="signin-btn flex-center"
        id="signin"
        @click="signoutAction"
      >
        Sign out
      </button>
      <button @click="writeRoomData('phong hop', '123')">Up data</button>
      <button @click="readRoomData('123')">Read</button>
    </div>

    <!-- Sign in ui -->
    <div
      v-else
      class="panel signin flex-col animate__animated animate__bounceIn"
    >
      <div class="flex-center">
        <img src="@/assets/playing.png" />
      </div>

      <div class="flex-center signin-area">
        <button
          role="btn"
          class="signin-btn flex-center"
          id="signin"
          @click="signinAction"
        >
          <img src="@/assets/google.png" height="30px" />
          Sign with Google
        </button>
      </div>
    </div>
  </div>
</template>



<script>
import firebase from "firebase/app";
import AlertDefault from "@/components/AlertDefault.vue";

import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var db = firebase.firestore();
var realtimeDB = firebase.database();

// function um() {
//   db.collection("users")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//       });
//     });
// }

export default {
  name: "user",
  data() {
    return {};
  },

  computed: {
    currentUser: {
      get() {
        return this.$store.state.currentUser;
      },
    },
  },

  methods: {
    // Func lap
    registerCurrentUser(user) {
      this.$store.commit("updateCurrentUser", user);
    },

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

    async uploadUser(user) {
      var data = db.collection("users");
      try {
        var querySnapshot = await data.where("email", "==", user.email).get();
        if (querySnapshot.docs.length === 0) {
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
        nickname: "",
        hasNickname: false,
        hasImage: true,
        hasIcon: false,
        image,
        icon: "",
        shortName: "BC",
        color: "",
      };
      return user;
    },

    writeRoomData(name, roomID) {
      console.log(name, "room/" + roomID);
      realtimeDB.ref("room/" + roomID).set({
        name,
      });
    },

    readRoomData(roomID) {
      realtimeDB.ref("room/" + roomID).on("value", (snapshot) => {
        const data = snapshot.val();
        console.log(data);
      });
    },

    signinAction() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let data = result.additionalUserInfo.profile;
          let user = this.createUser(data.email, data.name, data.picture);
          console.log(user);
          this.uploadUser(user);
        })
        .catch((error) => {
          console.log(error);
          this.showAlert("Error", "Error when Signing");
        });
    },

    signoutAction() {
      firebase.auth().signOut();
    },
  },
};
</script>