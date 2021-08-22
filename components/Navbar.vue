<template>
  <div class="w-full p-2 flex flex-row justify-evenly items-center shadow-md bg-white">
    <div class="flex items-center">
      <img src="../static/images/logo.png" />
      <h1 class="mx-3 font-bold font-mono text-lg text-pink-500">
        Happy Lottery
      </h1>
    </div>
    <div>
      <a href="/play" class="text-pink-500 font-bold mx-3">Play</a>
      <a href="/" class="text-pink-500 font-bold mx-3">Create</a>
    </div>

    <div v-if="is_signup_btn" class="flex">
      <a
        href="/login"
        class="block text-blue-600 font-bold mx-3 p-2 border-blue-500 border-2 box-border"
      >
        Sign up
      </a>
      <a class="block bg-indigo-200 text-blue-600 font-bold mx-3 p-2">
        Play Now
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    is_signup_btn: {
      type: Boolean,
      default() {
        return true;
      }
    }
  }
};
</script>
