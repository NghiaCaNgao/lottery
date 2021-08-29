<template>
  <div>
    <el-avatar
      v-if="image"
      :size="size"
      :src="image"
      class="cursor-pointer"
    ></el-avatar>
    <div
      v-else
      class="flex justify-center items-center bg-pink-100 text-pink-500 p-1 m-2 rounded-full"
      :class="{
        'w-10 h-10': size === 'medium'
      }"
    >
      <span class="font-bold">{{ short }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    name: {
      type: String,
      default() {
        return "Noname";
      }
    },
    image: {
      type: String,
      default() {
        return null;
      }
    },
    size: {
      type: String,
      default() {
        return "medium";
      }
    }
  },
  data() {
    return {
      short: "AH"
    };
  }
};
</script>
