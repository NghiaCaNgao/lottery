<template>
  <div
    class="mx-3 my-1 p-3  rounded-md flex items-center cursolr-pointer"
    :class="{
      'bg-yellow-100': isFill,
      'hover:bg-gray-100': !isFill
    }"
  >
    <div class="object-scale-down h-10 w-10 rounded-full avatar">
      <img
        :src="data.avatar"
        class="h-full rounded-full border-2 border-yellow-500"
      />
    </div>
    <h2
      class="font-semibold mx-3"
      :class="{
        'text-yellow-500': isFill,
        'text-gray-500': !isFill
      }"
    >
      {{ data.name }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    isFill: {
      type: Boolean,
      default() {
        return false;
      }
    },
    data: {
      type: Object,
      default() {
        return {
          name: "Nghia",
          uid: "aaa",
          avatar:
            "https://i.pinimg.com/474x/44/63/a2/4463a2b6260a0e6c3c7655eda69f2696.jpg"
        };
      }
    }
  }
};
</script>

<style lang="scss">
.avatar {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    box-sizing: content-box;
    background-color: green;
    border: 2px solid white;
    height: 7px;
    width: 7px;
    z-index: 500;
    border-radius: 50%;
  }
}
</style>
