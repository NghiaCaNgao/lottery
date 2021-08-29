<template>
  <div
    class="h-full flex flex-col overflow-y-scroll bg-white shadow-lg rounded-md m-3"
  >
    <div class="flex justify-between items-center">
      <HeaderPanel color="red" title="Games info" />
      <client-only>
        <button id="btn_share">
          <unicon name="share"></unicon>
        </button>
      </client-only>
    </div>

    <div class="h-full flex flex-col overflow-y-scroll m-3">
      <div>
        <img :src="url" class="mx-auto" />
      </div>

      <div class="flex items-center justify-center">
        <input
          type="text"
          class="p-1 m-3 text-indigo-500 bg-indigo-100
        font-semibold text-center ring-2 ring-indigo-500 rounded-md
        focus:outline-none"
          :value="roomHeader ? roomHeader.roomID : '000000'"
          disabled
        />
        <client-only>
          <button id="btn_copy">
            <unicon name="copy"></unicon>
          </button>
        </client-only>
      </div>

      <div class="m-3 p-1">
        <h1 class="font-semibold text-gray-600 m-3">
          Room ID:
          <span class="p-1 px-2 text-red-400 bg-red-100 rounded-full">{{
            roomHeader ? roomHeader.roomID : "000000"
          }}</span>
        </h1>
        <h1 class="font-semibold text-gray-600 m-3">
          Description:
          <span class="p-1 px-2 text-green-500 bg-green-100 rounded-full">{{
            roomHeader.name
          }}</span>
        </h1>
        <h1 class="font-semibold text-gray-600 m-3">
          Room Name:
          <span class="p-1 px-2 text-gray-500 bg-gray-100 rounded-full">{{
            roomHeader.description
          }}</span>
        </h1>
        <h1 class="font-semibold text-gray-600 m-3">
          Room Host:
          <span class="p-1 px-2 text-purple-400 bg-purple-100 rounded-full">{{
            roomHeader.host.name
          }}</span>
        </h1>
        <h1 class="font-semibold text-gray-600 m-3">
          Create
          <span class="p-1 px-2 text-purple-400 bg-purple-100 rounded-full">{{
            toNow(roomHeader.created_at)
          }}</span>
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import API from "~/api/data";
export default {
  name: "Info",
  data() {
    return {
      url: `https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=${"helloWorld"}`,
      roomHeader: {
        roomID: null,
        description: null,
        created_at: null,
        name: null,
        timestamp: null,
        host: {
          name: null,
          avatar: null,
          uid: null
        }
      }
    };
  },
  computed: {
    roomID() {
      return this.$route.params.roomID;
    }
  },

  created() {
    this.fetchRoomHeader();
  },

  methods: {
    toNow(time) {
      return API.Extension.toNow(time);
    },
    async fetchRoomHeader() {
      this.roomHeader = await API.Room.RoomData.getInfo(this.roomID);
      this.$store.commit("playground/updateRoomHeader", this.roomHeader);
    }
  }
};
</script>

<style lang="scss">
#btn_copy {
  svg {
    fill: #6366f1;
  }
}
#btn_share {
  margin: 0 10px;
  svg {
    fill: #6366f1;
  }
}
</style>
