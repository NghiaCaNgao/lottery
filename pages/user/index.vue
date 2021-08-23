<template>
  <div class="homepage flex flex-col w-screen bg-gray-50 h-screen">
    <Navbar :is_signup_btn="false" />
    <div class="container mx-auto w-3/4 lg:w-1/2 my-5">
      <h1 class="font-mono font-bold text-5xl text-gray-700 m-4 border-b-2">
        Profile
      </h1>
      <div
        class="flex w-full items-center md:justify-center flex-col md:flex-row"
      >
        <div class="w-3/4 md:w-1/3 m-4">
          <form>
            <div class="m-4">
              <h1
                class="font-semibold etxt-md"
                :class="{
                  'text-red-400': !form.emailVerified,
                  'text-blue-400': form.emailVerified
                }"
              >
                {{
                  form.emailVerified
                    ? "Account have verified"
                    : "Account have not verified"
                }}
              </h1>
              <h1>
                Sign in method:
                <span class="font-semibold">{{ form.provider }}</span>
              </h1>
            </div>
            <div class="m-4">
              <span class="font-bold text-gray-600">Username</span>
              <input
                v-model="form.name"
                class="block p-1 w-full focus:outline-none focus:ring-2 rounded-sm bg-gray-100"
                type="text"
              />
              <p class="text-sm text-gray-400">This is display name</p>
            </div>
            <div class="m-4">
              <span class="font-bold text-gray-600">Nickname</span>
              <input
                class="block p-1 w-full focus:outline-none focus:ring-2 rounded-sm bg-gray-100"
                type="text"
              />
              <p class="text-sm text-gray-400">This is alternative name</p>
            </div>
            <div class="m-4">
              <span class="font-bold text-gray-600">Email</span>
              <input
                v-model="form.email"
                class="block p-1 w-full focus:outline-none focus:ring-2 rounded-sm bg-gray-100"
                type="text"
              />
              <p class="text-sm text-gray-400">Your email address</p>
            </div>
            <div v-if="form.provider === 'password'" class="m-4">
              <span class="font-bold text-gray-600">Password</span>
              <input
                class="block p-1 w-full focus:outline-none focus:ring-2 rounded-sm bg-gray-100"
                type="password"
              />
              <p class="text-sm text-gray-400">Your password</p>
            </div>
          </form>
          <div class="flex justify-end">
            <button
              class="p-1 px-2 m-3 bg-indigo-700 font-bold text-white rounded-md"
              @click="update"
            >
              Update
            </button>
            <button
              class="p-1 px-2 m-3 bg-red-400 font-bold text-white rounded-md"
              @click="signOut"
            >
              Sign out
            </button>
          </div>
        </div>
        <div
          class="order-first md:order-last avatar object-scale-down rounded-full overflow-hidden m-5"
        >
          <img
            class="w-full"
            :src="
              form.avatar ||
                'https://1.bp.blogspot.com/-uNitfNUwyYY/XpM1JK3dQiI/AAAAAAAAdOM/lqnG45WY0uUEa21JHdMOocjEgxJJV5yGACLcBGAsYHQ/s1600/Avatar-Dep-Cho-Con-Gai%2B%25283%2529.jpg'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
import * as api from "../../api";
export default {
  name: "User",
  components: {
    Navbar
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        uid: null,
        emailVerified: null,
        provider: null,
        avatar: null
      }
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.state.authUser;
      }
    }
  },
  mounted() {
    this.form = this.currentUser;
  },

  methods: {
    signOut() {
      api.Auth.signOut().then(() => {
        window.open("/login", "_self");
      });
    },
    update() {
      api.User.updateUser(this.currentUser.uid, this.form);
    }
  }
};
</script>

<style lang="scss">
.avatar {
  width: 200px;
  height: 200px;
}
</style>
