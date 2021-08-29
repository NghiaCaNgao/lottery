<template>
  <div class="w-screen min-h-screen bg-gray-50 overflow-x-hidden">
    <Navbar />
    <div class="w-full my-24 flex flex-col items-center">
      <h1 class="text-center text-6xl font-mono text-gray-400">
        Start your world
      </h1>
      <input
        type="text"
        class="m-5 p-2 w-1/2  lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-100 rounded-md text-center text-indigo-400"
        maxlength="6"
        @keyup.enter="goto"
      />
    </div>

    <div class="container mx-auto">
      <div class="w-full overflow-x-hidden my-5">
        <h1 class="font-bold text-3xl text-gray-600 mx-3">Popular</h1>
        <div class="tray flex overflow-x-scroll p-4">
          <div
            v-for="item in popularData"
            :key="item.id"
            class="box shadow-lg flex-none cursor-pointer"
          >
            aa
          </div>
        </div>
      </div>

      <div class="w-full overflow-x-hidden my-5">
        <h1 class="font-bold text-3xl text-gray-600 mx-3">Your games</h1>
        <div class="tray flex overflow-x-scroll p-4">
          <div
            v-for="item in popularData"
            :key="item.id"
            class="box shadow-lg flex-none cursor-pointer"
          >
            aa
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import Navbar from "@@/components/Navbar.vue";
import API from "@@/api/data";

export default {
  name: "Play",
  components: {
    Navbar
  },
  data() {
    return {
      popularData: [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" }
      ]
    };
  },
  methods: {
    async goto(e) {
      const roomID = e.target.value;
      if (roomID.trim() === "")
        API.Extension.showNotification("warning", "Input wrong", "Input blank");
      else if (/\D/gi.test(roomID))
        API.Extension.showNotification(
          "warning",
          "Input wrong",
          "Input must be numberic"
        );
      else if (roomID.length !== 6)
        API.Extension.showNotification(
          "warning",
          "Input wrong",
          "Must be 6 numbers"
        );
      else if (!(await API.Room.RoomData.isExist(roomID))) {
        swal(
          "Invalid room ID",
          "May be the room have not created. Please try again",
          "warning"
        );
      } else window.open(`/play/${roomID}`, "_self");
    }
  }
};
</script>

<style lang="scss">
.box {
  height: 150px;
  width: 300px;
  border-radius: 7px;
  background-color: white;
  margin: 10px;
}
.tray {
  &::-webkit-scrollbar {
    height: 7px;
    border-radius: 99px;
    overflow: hidden;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 99px;
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(204, 204, 204, 0.481);
  }
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  & > div {
    scroll-snap-align: center;
  }
}
</style>
