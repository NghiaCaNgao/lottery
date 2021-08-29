<template>
  <div class="w-full flex flex-col m-3 bg-white shadow-lg rounded-md">
    <HeaderPanel color="yellow" title="Chat" />
    <div
      id="box_message"
      class="h-full bg-gray-100 rounded-md m-3 p-2 overflow-y-scroll"
    >
      <div
        v-for="item in messages"
        :key="item.id"
        class="flex m-1"
        :class="{
          'flex-row-reverse': item.isMe
        }"
      >
        <div class="h-7 w-7 rounded-full overflow-hidden">
          <img :src="item.user.avatar" class="h-full" />
        </div>
        <div
          class="flex flex-col"
          :class="{
            'items-end': item.isMe
          }"
        >
          <div
            class="mx-3 p-2 px-3 rounded-full font-semibold w-max"
            :class="{
              'bg-gray-200': !item.isMe,
              'bg-pink-200': item.isMe,
              'text-pink-500': item.isMe
            }"
          >
            <span>{{ item.messageText }}</span>
          </div>
          <div class="mx-3 my-1 flex justify-end">
            <span class="mx-1 text-sm text-gray-400">
              {{ item.user.name }}</span
            >
            <span class="mx-1 text-sm text-gray-400">
              {{ formatTime(item.timestamp) }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="input-message flex items-center p-2 px-5">
      <input
        id="messageText"
        type="text"
        placeholder="Type message"
        class="m-3 p-2 px-3 bg-indigo-50 rounded-full focus:outline-none w-full"
        @keyup.enter="pushMessage"
      />
      <client-only>
        <button @click="pushMessage">
          <unicon name="message"></unicon>
        </button>
      </client-only>
    </div>
  </div>
</template>
<script>
import API from "@@/api/data";
import HeaderPanel from "./HeaderPanel.vue";
export default {
  name: "Chat",
  components: {
    HeaderPanel
  },
  computed: {
    messages() {
      return this.$store.state.playground.messages;
    },
    roomID() {
      return this.$route.params.roomID;
    },
    user() {
      return this.$store.getters.displayUser;
    }
  },
  created() {
    this.listenData();
  },
  updated() {
    const lastElementChild = document.getElementById("box_message")
      .lastElementChild;
    lastElementChild.scrollIntoView();
  },
  methods: {
    listenData() {
      API.Room.Message.listenData.call(this, this.roomID, this.user.uid);
    },
    pushMessage() {
      try {
        const element = document.getElementById("messageText");
        const value = element.value;
        if (value.trim() !== "")
          API.Room.Message.addMessage(this.roomID, this.user, value);
        element.value = "";
      } catch (error) {
        console.error(error);
      }
    },
    formatTime(time) {
      return API.Extension.formatTime(time);
    }
  }
};
</script>
<style lang="scss">
.input-message {
  svg {
    fill: #6366f1;
  }
}
#box_message {
  scroll-behavior: smooth;
}
</style>
