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
export default {
  name: "GameArea",
  data() {
    return {
      labels: ["xoai", "le", "oi", "nhan", "coc", "dua", "oc cho"],
      colors: [
        "#D2F1E4",
        "#E7DEEA",
        "#FBCAEF",
        "#FA98D0",
        "#F865B0",
        "#E637BF",
        "#EF4EB8",
        "#E637BF"
      ]
    };
  },
  mounted() {
    this.draw();
    console.log("abc");
  },
  methods: {
    drawPiece(label, index) {
      const ctx = document.getElementById("canvasApp").getContext("2d");
      console.log(label);
      console.log(this.colors[index]);
      // Cal
      const number = this.labels.length;
      const textRadius = 200;
      const circleRadius = 300;
      const baseAngle = (2 * Math.PI) / number;
      const aStart = index * baseAngle;
      const aEnd = (index + 1) * baseAngle;
      const baseLine = aStart + baseAngle / 2;

      console.log(aStart, aEnd);
      // Draw
      ctx.beginPath();
      ctx.arc(0, 0, circleRadius, aStart, aEnd);
      ctx.lineTo(0, 0);
      ctx.fillStyle = this.colors[index];
      ctx.fill();
      ctx.closePath();

      // Fill label
      ctx.rotate(baseLine);
      ctx.fillStyle = "white";
      ctx.fillText(label, textRadius, 0);
      ctx.rotate(-baseLine);
    },

    draw() {
      const ctx = document.getElementById("canvasApp").getContext("2d");
      // Setup
      ctx.clearRect(0, 0, 600, 600);
      ctx.translate(300, 300);
      ctx.font = "20px Arial";
      ctx.textBaseline = "middle";

      // Draw
      this.labels.forEach((element, index) => {
        this.drawPiece(element, index);
      });

      // Deco
      ctx.beginPath();
      ctx.arc(0, 0, 100, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    }
  }
};
</script>

<style lang="scss">
  .pointer{
    transform:  translateY(-10px);
  }
</style>
