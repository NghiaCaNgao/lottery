<template>
  <div class="w-full flex flex-col m-3 bg-white shadow-lg rounded-md">
    <HeaderPanel color="yellow" title="Chat" />
    <div
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
          <img
            src="https://i.pinimg.com/474x/44/63/a2/4463a2b6260a0e6c3c7655eda69f2696.jpg"
            class="h-full"
          />
        </div>
        <div>
          <div
            class="mx-3 p-2 rounded-md font-semibold"
            :class="{
              'bg-gray-200': !item.isMe,
              'bg-pink-200': item.isMe,
              'text-pink-500': item.isMe
            }"
          >
            <span>Anh thich em cuc ky luon y</span>
          </div>
          <div class="mx-3 my-1 flex justify-end">
            <span class="mx-1 text-sm text-gray-400"> Nghiacangao</span>
            <span class="mx-1 text-sm text-gray-400"> 13:00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-message flex items-center p-2 px-5">
      <input
        type="text"
        placeholder="Type message"
        class="m-3 p-2 px-3 bg-indigo-50 rounded-full focus:outline-none w-full"
      />
      <client-only>
        <button>
          <unicon name="message"></unicon>
        </button>
      </client-only>
    </div>
  </div>
</template>
<script>
import HeaderPanel from "./HeaderPanel.vue";
export default {
  name: "Chat",
  components: {
    HeaderPanel
  },
  data() {
    return {
      messages: [
        { id: 1, isMe: false },
        { id: 2, isMe: true },
        { id: 3, isMe: true },
        { id: 4, isMe: true },
        { id: 5, isMe: true },
        { id: 6, isMe: false },
        { id: 7, isMe: true },
        { id: 9, isMe: true },
        { id: 10, isMe: true },
        { id: 11, isMe: true },
        { id: 12, isMe: true },
        { id: 13, isMe: true },
        { id: 14, isMe: true },
        { id: 15, isMe: true },
        { id: 16, isMe: true },
        { id: 17, isMe: true }
      ]
    };
  }
};
</script>
<style lang="scss">
.input-message {
  svg {
    fill: #6366f1;
  }
}
</style>
