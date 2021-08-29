<template>
  <div class="m-10 flex justify-center items-center relative">
    <canvas id="canvasApp" width="600" height="600"></canvas>
    <div
      class="h-full w-full absolute top-0 left-0 flex items-center justify-center"
    >
      <div class="h-32 pointer">
        <img src="../static/svgs/pointer.svg" class="h-full" />
      </div>
    </div>
  </div>
</template>
<script>
import GameControl from "../api/game/";
export default {
  name: "GameArea",
  data() {
    return {
      labels: ["xoai", "le", "oi", "nhan", "coc", "dua", "oc cho"]
    };
  },

  mounted() {
    this.create();
  },

  methods: {
    create() {
      const playControl = new GameControl(
        document.getElementById("canvasApp"),
        { labels: [...this.labels] }
      );
      playControl.draw();
    }
  }
};
</script>

<style lang="scss">
.pointer {
  transform: translateY(-10px);
}
</style>
