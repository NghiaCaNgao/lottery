<template>
  <div class="lottery flex-center">
    <!-- Rotation circle -->
    <div>
      <apexchart
        width="380"
        type="donut"
        :options="options"
        :series="series"
        id="circle"
      ></apexchart>

      <div class="pk flex-center">
        <div id="btn_r"></div>
      </div>
    </div>

    <!-- Force line -->
    <div class="force-wrap">
      <span>Force</span>
      <el-progress :percentage="force" :color="colors"></el-progress>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

// Interval effect on force line
var strigger = null;

export default {
  name: "chart",
  data() {
    return {
      dialogVisible: true,
      force: 0,
      sign: 1,

      // Color of force line
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],

      // Option for rotation circle
      options: {
        legend: {
          show: false,
        },
        labels: ["Apples", "Oranges", "Berries", "Grapes", "Mama"],
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.labels[opts.seriesIndex];
          },
        },
      },
      series: [1, 1, 1, 1, 1],

      // Constant effect rotation
      const_time_unit: 0.1,
      const_deg_unit: 0.07 * 360,
      deg: 0,
    };
  },

  computed: {
    turns: {
      get() {
        return this.$store.state.turns;
      },
      set(value) {
        this.$store.commit("changeTurn", value);
      },
    },
    lastUserPlay: {
      get() {
        return this.$store.state.lastUserPlay;
      },
      set() {
        this.$store.commit("changeLastUserPlay");
      },
    },
    history: {
      get() {
        return this.$store.state.history;
      },
      set() {
        this.$store.commit("changeHistory");
      },
    },
  },

  methods: {
    generateID() {
      let ID = "";
      let pattern = "abcdefghijklmnopqestuvxyz0123456789";
      for (let i = 0; i < 6; i++)
        ID = ID + pattern[Math.floor(Math.random() * 36)];
      return ID;
    },

    createHistoryEvent(value) {
      let item = {
        id: this.generateID(),
        user: this.lastUserPlay,
        action: {
          value: value,
          action: "",
        },
        timestamp: Date.now(),
      };
      this.history.push(item);
    },

    rotate() {
      let circle = document.getElementById("circle");

      // Set up constance
      if (this.force < 20) {
        this.const_deg_unit = 0.03 * 360;
        this.const_time_unit = 0.5;
      } else if (this.force < 40) {
        this.const_deg_unit = 0.1 * 360;
        this.const_time_unit = 0.3;
      } else if (this.force < 60) {
        this.const_deg_unit = 0.2 * 360;
        this.const_time_unit = 0.3;
      } else if (this.force < 80) {
        this.const_deg_unit = 0.3 * 360;
        this.const_time_unit = 0.4;
      } else if (this.force < 100) {
        this.const_deg_unit = 0.3 * 360;
        this.const_time_unit = 0.4;
      }

      // Calc time and number of rotations
      let time = this.const_time_unit * this.force;
      let plus = this.const_deg_unit * this.force;
      this.deg += plus;
      let value = 4 - (Math.floor(this.deg / (360 / 5)) % 5);

      console.log(this.force, time, this.deg);

      // play rotation
      circle.style.transition = `transform ${time}s`;
      circle.style.transform = `rotate(${this.deg}deg)`;

      circle.addEventListener("transitionend", () => {
        // Create History
        let value_name = this.options.labels[value];
        this.createHistoryEvent(value_name);
        // Alert
        swal({
          title: "You have been in " + value_name,
          icon: "info",
        });
      });

      this.turn--;
    },

    choseForce() {
      if (this.force >= 100) this.sign = -1;
      else if (this.force <= 0) this.sign = 1;
      this.force += this.sign;
    },
  },

  mounted() {
    let btn = document.getElementById("btn_r");
    btn.onmousedown = () => {
      if (!strigger) {
        strigger = setInterval(() => {
          this.choseForce();
        }, 30);
      }
    };
    btn.onmouseup = async () => {
      clearInterval(strigger);
      strigger = null;
      await this.$store.dispatch("updateForce");
      this.rotate();
      this.force = 0;
    };
  },
};
</script>