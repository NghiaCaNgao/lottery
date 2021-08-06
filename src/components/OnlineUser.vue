<template>
  <!-- online  user -->
  <div class="online-user panel flex-col animate__animated animate__bounceIn">
    <div class="panel__title flex-between">
      <h1>Online user</h1>
      <span>{{ Object.keys(onlineUsers).length }} users</span>
    </div>
    <!-- List of user -->
    <div class="panel__body flex-col">
      <div
        class="panel__item flex-between animate__animated animate__bounceIn"
        v-for="item in onlineUsers"
        :key="item.id"
      >
        <user-icon :item="item"></user-icon>
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
    onlineUsers: {
      get() {
        return this.$store.state.onlineUsers;
      },
    },
  },
};
</script>