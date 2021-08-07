<template>
  <!-- history -->
  <div class="history panel flex-col animate__animated animate__bounceIn">
    <div class="panel__title flex-between">
      <h1>History</h1>
      <span>{{ turns }} turns</span>
    </div>

    <div class="panel__body flex-col" v-if="history">
      <div
        class="panel__item flex-between"
        v-for="item in history"
        :key="item.id"
      >
        <!-- User info -->
        <div class="text-wrap">
          <user-icon :item="item.user" size="small"></user-icon>

          <!-- status -->
          <p class="panel__item-status">
            <span class="value" v-if="item.action.value">
              {{ item.action.value }}</span
            >
            <span
              v-else
              class="action"
              :class="{
                comein: item.action.action === 'come in',
                comeout: item.action.action === 'come out',
              }"
            >
              {{ item.action.action }}</span
            >
          </p>
        </div>
        <span class="timestamp">{{ formatTime(item.timestamp) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "./UserIcon.vue";
export default {
  name: "history",
  components: {
    UserIcon,
  },
  computed: {
    history: {
      get() {
        return this.$store.state.history;
      },
    },
    turns: {
      get() {
        return this.$store.state.turns;
      },
    },
  },
  methods: {
    formatTime(time) {
      let t = new Date(time);
      let min = t.getMinutes();
      let hour = t.getHours();
      return `${hour}:${min}`;
    },
  },
};
</script>