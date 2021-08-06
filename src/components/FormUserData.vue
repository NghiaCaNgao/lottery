<template>
  <div class="panel user flex-col animate__animated animate__bounceIn">
    <div class="panel__title">
      <h1>User settings</h1>
    </div>
    <!-- Main -->
    <div class="panel__body">
      <div class="avatar">
        <img :src="form.image" alt="avatar" />
      </div>
      <!-- Info -->
      <div class="user-info">
        <el-form
          ref="form"
          :model="form"
          label-width="240px"
          class="form-input"
        >
          <div>
            <el-form-item label="Username">
              <el-input v-model="form.name" disabled></el-input>
            </el-form-item>

            <el-form-item label="Email">
              <el-input v-model="form.email" disabled></el-input>
            </el-form-item>
            <el-form-item label="Nickname">
              <el-input v-model="form.nickname"></el-input> </el-form-item
            ><el-form-item label="Color">
              <el-select v-model="form.color" placeholder="Choose a color">
                <el-option label="Red" value="red"></el-option>
                <el-option label="Green" value="green"></el-option>
                <el-option label="Blue" value="blue"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="Display nickname">
              <el-switch v-model="form.hasNickname"></el-switch>
            </el-form-item>
            <el-form-item label="Dark mode">
              <el-switch v-model="form.darkmode"></el-switch>
            </el-form-item>
          </div>
        </el-form>
        <button role="btn" @click="signoutAction" id="signout">Sign Out</button>
        <button role="btn" @click="updateAccount" id="update">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

export default {
  name: "form-user-data",
  data() {
    return {
      form: {
        email: undefined,
        name: undefined,
        image: undefined,
        nickname: undefined,
        color: "blue",
        hasUser: false,
        hasNickname: false,
        darkmode: false,
      },
    };
  },

  methods: {
    async updateCloudUser() {
      var currentUser = this.$store.state.currentUser;
      var user = {
        nickname: currentUser.nickname,
        color: currentUser.color,
        hasNickname: currentUser.hasUser,
        darkmode: currentUser.darkmode,
      };

      var db = firebase.firestore();
      var data = db.collection("users");
      // Find id
      var docIDs = (
        await data.where("email", "==", currentUser.email).get()
      ).docs.map((doc) => doc.id);
      // Update
      data.doc(docIDs[0]).update(user);
    },

    updateAccount() {
      try {
        this.$store.commit("updateCurrentUser", this.form);
        this.updateCloudUser();
        swal({
          title: "Account updated",
          text: "You have changed your account info",
          icon: "success",
        });
      } catch (error) {
        swal("Account Alert", "Loi ghi du lieu");
      }
    },

    async checkExist(email, roomID) {
      var database = firebase.database();
      var baseRef = "room/" + roomID + "/onlineUsers/";
      var emailExist = false;
      console.log(email, baseRef);
      
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
    },

    async uploadStateRemoveOnlineUser() {
      var roomID = this.roomID;
      var currentUser = this.currentUser;
      var database = firebase.database();
      var baseRef = "room/" + roomID + "/onlineUsers/";
      var exist = await this.checkExist(currentUser.email, roomID);
      if (exist) {
        var dataRef = baseRef + exist;
        database.ref(dataRef).remove();
      }
    },

    async signoutAction() {
      await this.uploadStateRemoveOnlineUser();
      firebase.auth().signOut();
    },
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
      },
    },
  },

  mounted() {
    this.form = this.currentUser;
  },
};
</script>