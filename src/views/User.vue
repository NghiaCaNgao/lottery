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


// function lm() {
//   db.collection("users")
//     .add({
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// }

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

    signinAction() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
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