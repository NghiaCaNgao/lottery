<template>
  <div
    class="w-full p-2 flex flex-row justify-evenly items-center shadow-md bg-white"
  >
    <div class="flex items-center">
      <a href="/" class="flex items-center">
        <img src="../static/images/logo.png" />
        <h1 class="mx-3 font-bold font-mono text-lg text-pink-500">
          Happy Lottery
        </h1>
      </a>
    </div>
    <div>
      <a href="/play" class="text-pink-500 font-bold mx-3">Play</a>
      <a href="/" class="text-pink-500 font-bold mx-3">Create</a>
    </div>

    <div v-if="other_links" class="flex">
      <div v-if="!isLoggedIn" class="flex">
        <a
          href="/login"
          class="block text-blue-600 font-bold mx-3 p-1 px-3 border-blue-500 border-2 rounded-full box-border"
        >
          Sign up
        </a>
        <a
          class="block bg-indigo-200 text-blue-600 font-bold mx-3 p-1 px-3 rounded-full"
        >
          Play Now
        </a>
      </div>

      <div v-else class="flex">
        <a
          class="block text-white font-semibold text-blue-600 mx-3 p-2 bg-indigo-200"
        >
          Dasboard
        </a>
        <div class="my-auto mx-4">
          <!-- <div class="avatar-small cursor-pointer">
            <img :src="currentUser.avatar" class="w-full" />
          </div> -->
          <MenuContext
            :image="currentUser.avatar"
            type="image"
            :data_menu_context="dataContext"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuContext from "./MenuContext.vue";
export default {
  name: "Navbar",
  components: {
    MenuContext
  },
  props: {
    other_links: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      dataContext: [
        {
          id: "0",
          href: "/user",
          text: "Profile"
        },
        {
          id: "1",
          href: "/user/history",
          text: "History"
        },
        {
          id: "2",
          href: "/user/games",
          text: "Your games"
        }
      ]
    };
  },

  computed: {
    isLoggedIn: {
      get() {
        return this.$store.getters.isLoggedIn;
      }
    },
    currentUser: {
      get() {
        return this.$store.getters.displayUser;
      }
    }
  }
};
</script>

<style lang="scss">
.avatar-small {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
