<template>
  <div class="navbar flex-between">
    <!-- Logo -->
    <div class="navbar__left">
      <div class="logo">
        <img src="../assets/logo.png" height="32px" />
      </div>
      <h1>Happy Loterry</h1>
    </div>
    <!-- Link -->
    <div class="navbar__link">
      <router-link to="/">Play</router-link>
      <router-link to="/create">Create</router-link>
    </div>
    <div class="navbar__tool">
      <!-- User manager -->
      <router-link to="/user" class="userdata flex-center">
        <div class="icon">
          <el-avatar size="small" :src="currentUser.image"></el-avatar>
        </div>
        <div class="username">{{ currentUser.name }}</div></router-link
      >
      <!-- Share tool -->
      <button role="btn">
        <unicon name="qrcode-scan"></unicon>
      </button>
      <button role="btn">
        <unicon name="share"></unicon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    currentUser: {
      get() {
        return this.$store.state.currentUser;
      },
    },
  },
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>