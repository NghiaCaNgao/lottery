<template>
  <div>
    <apexchart
      width="380"
      type="donut"
      :options="options"
      :series="series"
      id="circle"
    ></apexchart>

    <div class="pk flex-center">
      <div id = "btn_r" @click="rotate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chart",
  data() {
    return {
      options: {
        legend: {
          show: false,
        },
        labels: ["Apples", "Oranges", "Berries", "Grapes", "Mama"],
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            console.log(val, opts);
            return opts.w.config.labels[opts.seriesIndex];
          },
        },
      },
      series: [1, 1, 1, 1, 1], 
      force: 0.3,
      const_time_unit: 3,
      const_deg_unit: 0.1*360,
      t: 1,
    };
  },
  methods: {
    rotate() {
      let circle = document.getElementById("circle");

      circle.style.transition = `transform ${this.const_time_unit*this.force}s`;
      circle.style.transform = `rotate(${this.const_deg_unit*this.force*this.t}deg)`;
      this.t++;
    },
  },
  created(){
    let btn = document.getElementById("btn_r");
    btn.onmousedown = function(){
      
    }
  }
};
</script>