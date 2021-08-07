<template>
  <el-container class="app">
    <!-- Navbar -->
    <el-header>
      <navbar></navbar>
    </el-header>

    <!-- Display page -->
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
@import "./style/theme.css";
@import "./style/mixin.scss";
@import "./style.scss";
</style>