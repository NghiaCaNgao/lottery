<template>
  <div class="page">
    <!-- Playground -->
    <div class="panel flex-col animate__animated animate__bounceIn playground">
      <chart></chart>
    </div>

    <!-- Detail game -->
    <div class="detail-player flex-col flex-center">
      <online-user></online-user>
      <history></history>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import OnlineUser from "../components/OnlineUser.vue";
import History from "../components/History.vue";
export default {
  components: {
    Chart,
    OnlineUser,
    History,
  },
  name: "play",
};
</script>