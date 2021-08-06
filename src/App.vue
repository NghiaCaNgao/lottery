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

<script src = "./app.index.js"></script>

<style lang="scss">
@import "./style.scss";
@import "./theme.css";
</style>