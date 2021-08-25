<template>
  <div
    class="h-full flex flex-col overflow-y-scroll bg-white shadow-lg rounded-md m-3"
  >
    <HeaderPanel color="red" title="Games info" />

    <div class="h-full flex-col overflow-y-scroll m-3">
      <div class="m-4">
        <img :src="url" class="mx-auto" />
      </div>
      <!-- <div>
        <client-only>
          <button>
            <unicon name="share"></unicon>
          </button>
        </client-only>
      </div> -->
      <div class="flex items-center justify-center">
        <input
          type="text"
          class="p-1 m-3 text-indigo-500 bg-indigo-100 font-semibold text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
        />
        <client-only>
          <button class="copy-btn">
            <unicon name="copy"></unicon>
          </button>
        </client-only>
      </div>

      <div class="m-3 p-1">
        <h1 class="font-semibold text-gray-600 m-3">
          Room ID:
          <span class="p-1 px-2 text-red-400 bg-red-100 rounded-full"
            >123456</span
          >
        </h1>
        <h1 class="font-semibold text-gray-600 m-3">
          Room Name:
          <span class="p-1 px-2 text-green-500 bg-green-100 rounded-full"
            >Con cai nit</span
          >
        </h1>
        <h1 class="font-semibold text-gray-600 m-3">
          Room Host:
          <span class="p-1 px-2 text-purple-400 bg-purple-100 rounded-full"
            >abc</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
  data() {
    return {
      url: `https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=${"helloWorld"}`
    };
  }
};
</script>

<style lang="scss">
.copy-btn {
  svg {
    fill: #6366f1;
  }
}
</style>
