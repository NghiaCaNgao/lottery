<template>
  <apexchart
    width="380"
    type="donut"
    :options="{
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          return opts.w.config.labels[opts.seriesIndex];
        },
      },
      labels: labels,
    }"
    :series="series"
    id="circle"
  ></apexchart>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array,
    },
    series: {
      type: Array,
    },
  },
};
</script>