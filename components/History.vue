<template>
  <div
    class="h-full flex flex-col overflow-y-scroll bg-white shadow-lg rounded-md m-3"
  >
    <HeaderPanel color="purple" title="History" />
    <div class="h-full m-3 p-2 bg-gray-100 overflow-y-scroll">
      <div
        v-for="item in history"
        :key="item.id"
        class="m-3 p-1 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div class="h-7 w-7 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/44/63/a2/4463a2b6260a0e6c3c7655eda69f2696.jpg"
              height="h-full"
            />
          </div>
          <h1 class="mx-3 font-semibold text-gray-500">Nghiacangao</h1>
          <span
            class="text-red-500 text-sm bg-red-100 font-semibold px-2 rounded-full"
          >
            Logout</span
          >
        </div>
        <div>
          <span class="text-gray-400 text-sm">13:06</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      history: [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" }
      ]
    };
  }
};
</script>
