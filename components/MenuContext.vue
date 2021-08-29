<template>
  <div>
    <el-popover placement="bottom" width="200" trigger="click">
      <div class="menu">
        <ul v-if="data_menu_context">
          <a
            v-for="item in data_menu_context"
            :key="item.id"
            class="block p-2 font-semibold text-md hover:bg-indigo-100 hover:text-indigo-600"
            :href="item.href"
          >
            <li>{{ item.text }}</li>
          </a>
        </ul>
        <h1 v-else>No data</h1>
      </div>

      <button
        v-if="type === 'icon'"
        id="more"
        slot="reference"
        class="hover:bg-indigo-100 p-2 rounded-full flex justify-center items-center m-2"
      >
        <client-only>
          <unicon :name="icon"></unicon>
        </client-only>
      </button>

      <el-avatar
        v-if="type === 'image'"
        slot="reference"
        size="medium"
        :src="image"
        class="cursor-pointer"
      >
      </el-avatar>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: "MenuContext",
  props: {
    data_menu_context: {
      type: Array,
      default() {
        return null;
      }
    },
    type: {
      type: String,
      default() {
        return "text"; // text | image | icon
      }
    },
    image: {
      type: String,
      default() {
        return null;
      }
    },
    icon: {
      type: String,
      default() {
        return "apps";
      }
    }
  },
  // mounted() {
  //   console.log(this.data_menu_context, this.type);
  // }
};
</script>

<style lang="scss">
#more {
  svg {
    fill: blue;
  }
}
</style>
