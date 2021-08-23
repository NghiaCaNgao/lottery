<template>
  <div class="homepage flex flex-col w-screen h-screen bg-gray-50 overflow-hidden">
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
          <input id="inpRoomID" placeholder="Room ID" />
        </div>
      </div>
      <div
        class="
          w-full
          xl:w-1/4
          lg:w-1/3
          md:w-1/2
          object-scale-down
          mx-auto
          my-auto
        "
      >
        <img src="../static/images/playing.png" class="w-full" />
      </div>
    </div>
    <div>
      <p class="text-center font-semibold font text-pink-500">Dev by NCN</p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Homepage",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
input {
  border-radius: 20px;
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
