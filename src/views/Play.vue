<template>
  <div class="page">
    <!-- Playground -->
    <playground></playground>

    <!-- Detail game -->
    <div class="detail-player flex-col flex-center">
      <online-user></online-user>
      <history></history>
    </div>
  </div>
</template>

<script>
import Playground from "../components/Playground.vue";
import OnlineUser from "../components/OnlineUser.vue";
import History from "../components/History.vue";
export default {
  components: {
    Playground,
    OnlineUser,
    History,
  },
  name: "play",
};
</script>

<style lang="scss">
@import "./play.scss";
</style>