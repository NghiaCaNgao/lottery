<template>
  <div class="w-screen h-screen bg-gray-100 flex flex-col overflow-x-hidden">
    <HeaderGame />
    <div class="flex flex-row w-full h-full p-3 overflow-hidden">
      <Game />

      <div
        v-if="views.rule || views.onlineUser"
        class="w-full h-full max-h-full flex flex-col overflow-hidden"
      >
        <Rule v-if="views.rule" />
        <OnlineUser v-if="views.onlineUser" />
      </div>

      <div
        v-if="views.info || views.history"
        class="w-full h-full max-h-full flex flex-col overflow-hidden"
      >
        <Info v-if="views.info" />
        <History v-if="views.history" />
      </div>

      <Chat v-if="views.chat" />
    </div>
  </div>
</template>

<script>
import HeaderGame from "@@/components/HeaderGame.vue";
import Rule from "@@/components/Rule.vue";
import OnlineUser from "@@/components/OnlineUser.vue";
import Info from "@@/components/Info.vue";
import History from "@@/components/History.vue";
import Chat from "@@/components/Chat.vue";
import Game from "@@/components/Game.vue";
import API from "@@/api/data";
export default {
  name: "Hello",
  components: {
    HeaderGame,
    Rule,
    OnlineUser,
    Info,
    History,
    Chat,
    Game
  },
  computed: {
    views() {
      return this.$store.state.playground.views;
    },
    user() {
      return this.$store.getters.displayUser;
    },
    roomID() {
      return this.$route.params.roomID;
    }
  },

  created() {
    if (process.client) {
      addEventListener("beforeunload", e => {
        e.preventDefault();
        e.returnValue = "";

        API.Room.OnlineUser.removeOnlineUserOnDisconnect(
          this.roomID,
          this.user.uid
        );
        API.Room.History.addHistory(this.roomID, this.user, {
          action: API.Room.History.action.LOGOUT
        });
      });
    }
    if (this.user.avatar) {
      this.joinRoom();
    }
  },

  methods: {
    joinRoom() {
      API.Room.OnlineUser.addOnlineUser(this.roomID, this.user);
      API.Room.History.addHistory(this.roomID, this.user, {
        action: API.Room.History.action.LOGIN
      });
    }
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 7px;
  border-radius: 7px;
  background-color: transparent;
}
*:hover::-webkit-scrollbar-thumb {
  background-color: gray;
  cursor: pointer;
}
</style>
