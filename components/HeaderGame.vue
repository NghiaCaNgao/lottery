<template>
  <div
    class="m-5 p-3 bg-white rounded-lg flex justify-evenly items-center shadow-lg"
  >
    <div>
      <img src="../static/images/logo.png" />
    </div>
    <div>
      <span
        class="bg-indigo-50 text-indigo-500 rounded-md font-semibold p-1 m-2"
      >
        {{ roomID }}
      </span>
      <span
        class="bg-yellow-50 text-yellow-500 rounded-md font-semibold p-1 m-2"
      >
        {{ roomName }}
      </span>
    </div>
    <div class="group-toogle-btn">
      <client-only>
        <button
          :class="{
            active: views.info
          }"
          @click="views.info = !views.info"
        >
          <unicon name="share"></unicon>
        </button>
        <button
          :class="{
            active: views.onlineUser
          }"
          @click="views.onlineUser = !views.onlineUser"
        >
          <unicon name="users-alt"></unicon>
        </button>
        <button
          :class="{
            active: views.history
          }"
          @click="views.history = !views.history"
        >
          <unicon name="history-alt"></unicon>
        </button>
        <button
          :class="{
            active: views.chat
          }"
          @click="views.chat = !views.chat"
        >
          <unicon name="chat"></unicon>
        </button>
        <button
          :class="{
            active: views.rule
          }"
          @click="views.rule = !views.rule"
        >
          <unicon name="ruler"></unicon>
        </button>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderGame",
  data() {
    return {
      roomID: null,
      roomName: "Hallo",
      views: {
        info: true,
        onlineUser: true,
        chat: false,
        history: true,
        rule: false
      }
    };
  },
  created() {
    console.log(this.$route.params);
    this.roomID = this.$route.params.roomID;
  }
};
</script>

<style lang="scss">
.group-toogle-btn {
  display: flex;
  button {
    margin: 5px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #ff5d90;
    }
    &.active {
      background-color: #fadee2;
    }
  }
}
</style>
