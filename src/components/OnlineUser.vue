<template>
  <!-- online  user -->
  <div class="user panel flex-col animate__animated animate__bounceIn">
    <div class="panel__title flex-between">
      <h1>Online user</h1>
      <span>{{ users.length }} users</span>
    </div>
    <!-- List of user -->
    <div class="panel__body flex-col">
      <div
        class="panel__item flex-between"
        v-for="item in users"
        :key="item.id"
      >
        <user-icon :item="item"></user-icon>
        <!-- status -->
        <div class="panel__item-status">
          <span>{{ processTime(item.comeinTime) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "./UserIcon.vue";
export default {
  name: "online-user",
  components: {
    UserIcon,
  },
  computed: {
    users: {
      get() {
        return this.$store.state.onlineUser;
      },
    },
  },
  methods: {
    processTime(time) {
      let bet = (Date.now() - time) / 1000;
      if (bet < 60) return "under 1 min";
      else if (bet <= 3600) return `${Math.floor(bet / 60)} m`;
      else return `${Math.floor(bet / 3600)} h`;
    },
  },
};
</script>