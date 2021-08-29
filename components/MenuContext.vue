<template>
  <div>
    <el-popover placement="bottom" width="200" trigger="click">
      <div v-if="mode === 'normal'" class="menu">
        <ul v-if="data_menu_context">
          <a
            v-for="item in data_menu_context"
            :key="item.id"
            class="block p-2 font-semibold text-md hover:bg-indigo-100 hover:text-indigo-600"
            :href="item.href"
          >
            <li class="flex list-menu-context">
              <client-only v-if="item.icon">
                <unicon :name="item.icon"></unicon>
              </client-only>
              <span class="mx-3">{{ item.text }}</span>
            </li>
          </a>
        </ul>
        <h1 v-else>No data</h1>
      </div>

      <div v-if="mode === 'notification_box'">
        <div>
          <h1 class="font-bold text-xl text-gray-500 m-1">Notifications</h1>
        </div>
        <div id="notification_box" class="p-3">
          <ul v-if="data_notification">
            <li
              v-for="item in data_notification"
              :key="item.id"
              class="flex hover:bg-gray-100 rounded-md"
            >
              <Avatar />
              <div class="flex flex-col justify-center mx-3">
                <h1
                  class="font-semibold text-gray-600 overflow-truncate max-w-full"
                >
                  {{ item.title }}
                </h1>
                <h1 class="text-gray-400 overflow-ellipsis">{{ item.text }}</h1>
              </div>
            </li>
          </ul>
          <h1 v-else>No data</h1>
        </div>
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
import Avatar from "./Avatar.vue";
export default {
  name: "MenuContext",
  components: {
    Avatar
  },
  props: {
    data_notification: {
      type: Array,
      default() {
        return null;
      }
    },
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
    },
    mode: {
      type: String,
      default() {
        return "normal"; // normal notification_box
      }
    }
  },
  mounted() {
    console.log(this.data_notification);
  }
};
</script>

<style lang="scss">
#more {
  svg {
    fill: blue;
  }
}
#notification_box {
  width: 350px;
}
.el-popover.el-popper {
  width: unset !important;
}
.list-menu-context {
  svg {
    fill: blue;
  }
}
</style>
