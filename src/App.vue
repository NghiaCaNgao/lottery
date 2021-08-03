<template>
  <el-container class="app">
    <el-header>
      <div class="navbar">
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
        enter-active-class="animated animate__fadeIn"
        leave-active-class="animated animate__fadeOut"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@import "./style.scss";
@import "./theme.css";
</style>