<template>
  <div
    class="homepage flex flex-col w-screen h-screen bg-gray-50 overflow-hidden"
  >
    <Navbar />
    <div class="w-full h-full flex flex-col lg:flex-row">
      <div class="mx-auto my-auto">
        <h1 class="text-gray-600 text-6xl text-center font-mono font-bold">
          Playing game together
        </h1>
        <p
          class="
            my-3
            text-gray-400 text-lg text-center
            lg:text-left
            font-semibold
          "
        >
          With your friend, let make up your life
        </p>
        <div class="flex justify-center">
          <input
            id="inpRoomID"
            placeholder="Room ID"
            maxlength="6"
            @keyup.enter="goto"
          />
        </div>
      </div>
    </div>
    <div>
      <p class="text-center font-semibold font text-pink-500">Dev by NCN</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@@/components/Navbar.vue";
import API from "@@/api/data";
export default {
  name: "Homepage",
  components: {
    Navbar
  },
  methods: {
    async goto(e) {
      const roomID = e.target.value;
      const valid = await API.Room.RoomData.isValidRoomWithAlert(roomID);
      if (valid) window.open(`/play/${roomID}`, "_self");
    }
  }
};
</script>

<style lang="scss">
.homepage {
  background-image: url("static/svgs/bg_day.svg");
  background-position: center;
  background-size: cover;
}
input {
  border-radius: 25px;
  margin: 20px 0;
  background-color: rgb(247, 50, 89);
  box-shadow: 0px 0px 17px 4px #ff000052;
  padding: 10px 20px;
  color: white;
  font-weight: 700;
  text-align: center;
  width: 110px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    width: 200px;
  }
  &::placeholder {
    color: white;
  }
}
</style>
