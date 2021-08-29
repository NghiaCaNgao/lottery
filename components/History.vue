<template>
  <div
    class="h-full flex flex-col overflow-y-scroll bg-white shadow-lg rounded-md m-3"
  >
    <HeaderPanel color="purple" title="History" />
    <div class="h-full m-3 p-2 bg-gray-100 overflow-y-scroll">
      <div
        v-for="item in history"
        :key="item.id"
        class="m-3 p-1 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div class="h-7 w-7 rounded-full overflow-hidden">
            <img :src="item.user.avatar" height="h-full" />
          </div>
          <h1 class="mx-3 font-semibold text-gray-500">{{ item.user.name }}</h1>
          <span
            v-if="item.action.action"
            class=" text-sm font-semibold px-2 rounded-full"
            :class="{
              'text-red-500 bg-red-100': item.action.action === action.LOGOUT,
              'text-green-500 bg-green-100': item.action.action === action.LOGIN
            }"
          >
            {{ item.action.action }}</span
          >
        </div>
        <div>
          <span class="text-gray-400 text-sm">{{
            formatTime(item.timestamp)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@@/api/data";
export default {
  name: "History",
  computed: {
    history() {
      return this.$store.state.playground.history;
    },
    roomID() {
      return this.$route.params.roomID;
    },
    action() {
      return API.Room.History.action;
    }
  },
  watch: {
    history(new_val) {
      const new_info = [];
      const now = Date.now();

      for (const item in new_val) {
        if (now - new_val[item].timestamp < 1500) {
          new_info.push(new_val[item]);
        }
      }

      new_info.forEach(item => {
        if (item.action && item.action.action) {
          API.Extension.showNotification(
            "info",
            "New player",
            `${item.user.name} ${item.action.action}`
          );
        }
      });
    }
  },
  created() {
    this.listenData();
  },

  methods: {
    listenData() {
      API.Room.History.listenData.call(this, this.roomID);
    },
    formatTime(time) {
      return API.Extension.formatTime(time);
    }
  }
};
</script>
