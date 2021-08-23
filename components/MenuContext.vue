<template>
  <div>
    <el-popover placement="bottom" width="200" trigger="click">
      <div class="menu">
        <ul v-if="data_menu_context">
          <a
            v-for="item in data_menu_context"
            :key="item.id"
            class="block my-2 p-2 font-semibold text-md hover:bg-indigo-100 hover:text-indigo-600"
            :href="item.href"
          >
            <li>{{ item.text }}</li>
          </a>
        </ul>
        <h1 v-else>No data</h1>
      </div>

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
        return "text";
      }
    },
    image: {
      type: String,
      default() {
        return null;
      }
    }
  }
};
</script>
