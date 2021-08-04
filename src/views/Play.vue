<template>
  <div class="page">
    <div class="panel animate__animated animate__bounceIn playground">
      <chart></chart>
    </div>

    <div class="detail-player">
      <!-- online  user -->
      <div class="user panel animate__animated animate__bounceIn">
        <div class="panel__title">
          <h1>Online user</h1>
          <span>{{ users.length }} users</span>
        </div>
        <!-- List of user -->
        <div class="panel__body">
          <div class="panel__item" v-for="item in users" :key="item.id">
            <user-icon :item="item"></user-icon>

            <div class="panel__item-status">
              <span>{{ processTime(item.comeinTime) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="history panel animate__animated animate__bounceIn">
        <div class="panel__title">
          <h1>History</h1>
          <span>{{ turn }} turns</span>
        </div>
        <div class="panel__body">
          <div class="panel__item" v-for="item in history" :key="item.id">
            <div class="text-wrap">
              <user-icon
                :item="item.user"
                size="small"
                :hasName="false"
              ></user-icon>
              <p class="panel__item-status">
                <span class="name">{{ item.user.name }}</span> has been in
                <span class="action" v-if="item.action.value === ''">
                  {{ item.action.action }}</span
                >
                <span v-else class="value"> {{ item.action.value }}</span>
              </p>
            </div>
            <span>{{ formatTime(item.timestamp) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import UserIcon from "../components/UserIcon.vue";
export default {
  components: {
    Chart,
    UserIcon,
  },
  name: "play",
  methods: {
    processTime(time) {
      let bet = (Date.now() - time) / 1000;
      if (bet < 60) return "under 1 min";
      else if (bet <= 3600) return `${Math.floor(bet / 60)} m`;
      else return `${Math.floor(bet / 3600)} h`;
    },
    formatTime(time) {
      let t = new Date(time);
      let min = t.getMinutes();
      let hour = t.getHours();
      return `${hour}:${min}`;
    },
  },
  computed: {
    turn: {
      get() {
        return this.$store.state.turn;
      },
      set() {
        this.$store.state.commit("changeTurn");
      },
    },
    users: {
      get() {
        return this.$store.state.onlineUser;
      },
    },
    history: {
      get() {
        return this.$store.state.history;
      },
    },
    lastUserPlay: {
      get() {
        return this.$store.state.lastUserPlay;
      },
    },
  },
};
</script>