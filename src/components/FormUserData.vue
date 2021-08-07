<template>
  <div class="panel user flex-col animate__animated animate__bounceIn">
    <div class="panel__title">
      <h1>User settings</h1>
    </div>
    <!-- Main -->
    <div class="panel__body">
      <!-- Avatar -->
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
            <!-- -- -->
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
          <!-- --- -->
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
import api from "../api/api";

export default {
  name: "form-user-data",
  data() {
    return {
      form: {
        email: null,
        name: null,
        image: null,
        nickname: null,
        color: "blue",
        hasUser: false,
        hasNickname: false,
        darkmode: false,
      },
    };
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

  methods: {
    async uploadUser() {
      var currentUser = this.$store.state.currentUser;
      var user = {
        nickname: currentUser.nickname,
        color: currentUser.color,
        hasNickname: currentUser.hasNickname,
        darkmode: currentUser.darkmode,
      };

      var userID = await api.findUser(currentUser.email);
      api.updateUser(userID, user);
    },

    updateAccount() {
      try {
        this.$store.commit("updateCurrentUser", this.form);
        this.uploadUser();
        swal({
          title: "Account updated",
          text: "You have changed your account info",
          icon: "success",
        });
      } catch (error) {
        swal("Account Alert", "Error on updating");
      }
    },

    async removeOnlineUser() {
      // Remove online user
      var roomID = this.roomID;
      var currentUser = this.currentUser;

      // remove online user
      var userID = await api.findOnlineUser(roomID, currentUser.email);
      if (userID) api.removeOnlineUser(roomID, userID);

      // add history
      api.addHistory(roomID, currentUser, null, "come out");
    },

    async signoutAction() {
      await this.removeOnlineUser();
      firebase.auth().signOut();
    },
  },

  mounted() {
    this.form = this.currentUser;
  },
};
</script>