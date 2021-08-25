<template>
  <div class="w-full flex flex-col m-3 bg-white shadow-lg rounded-md">
    <HeaderPanel color="pink" title="Circle" />

    <GameArea />
  </div>
</template>

<script>
import HeaderPanel from "./HeaderPanel.vue";
import GameArea from "./GameArea.vue";
export default {
  name: "Game",
  components: {
    HeaderPanel,
    GameArea
  }
};
</script>
