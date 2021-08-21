<template>
  <div class="homepage flex flex-col w-screen h-screen overflow-hidden">
    <div class="w-full p-2 flex flex-row justify-evenly items-center shadow-md">
      <div class="flex items-center">
        <img src="../static/images/logo.png" />
        <h1 class="mx-3 font-bold font-mono text-lg text-pink-500">Happy Lottery</h1>
      </div>
      <div>
        <a href="/" class="text-pink-500 font-bold mx-3">Play</a>
        <a href="/" class="text-pink-500 font-bold mx-3">Create</a>
      </div>
      <div>
        <button
          class="
            text-blue-600
            font-bold
            mx-4
            border-blue-500 border-2
            p-1
            box-content
          "
        >
          Sign up
        </button>
        <button class="bg-indigo-200 text-blue-600 font-bold mx-3 p-2">
          Play Now
        </button>
      </div>
    </div>
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
export default {
  name: "Homepage",
};
</script>

<style lang="scss">
.homepage {
  // box-shadow: 0 0 12px 0px #0000002e;
}
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
