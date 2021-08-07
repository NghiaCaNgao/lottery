<template>
  <div class="page flex-center">
    <!-- User settings -->
    <form-user-data v-if="currentUser.hasUser"></form-user-data>

    <!-- Sign in ui -->
    <div
      v-else
      class="
        panel
        signin
        flex-col flex-center
        animate__animated animate__bounceIn
      "
    >
      <!-- deco image -->
      <div class="flex-center">
        <img src="@/assets/playing.png" />
      </div>

      <!-- Button sigin  -->
      <button role="btn" class="flex-center" id="signin" @click="signinAction">
        <img src="@/assets/google.png" height="30px" />
        Sign with Google
      </button>
    </div>
  </div>
</template>

<script src="./user.index.js"></script>
<style lang="scss">
@import "./user.scss";
</style>