<template>
  <div class="w-screen min-h-screen overflow-hidden bg-gray-100">
    <HeaderGame />
    <div class="grid-col-12"></div>
  </div>
</template>

<script>
import HeaderGame from "../../components/HeaderGame.vue";
export default {
  name: "Hello",
  components: {
    HeaderGame
  }
};
</script>
