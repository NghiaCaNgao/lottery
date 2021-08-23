<template>
  <div class="homepage flex flex-col w-screen bg-gray-50 h-screen">
    <Navbar :is_signup_btn="false" />
    <div class="container mx-auto w-3/4 lg:w-1/2 my-5">
      <h1 class="font-mono font-bold text-5xl text-gray-700 m-4 border-b-2">
        Profile
      </h1>
      <div
        class="flex w-full items-center md:items-start md:justify-center flex-col md:flex-row"
      >
        <div class="w-3/4 md:w-1/3 m-4">
          <!-- Form input -->
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
                v-model="form.nickname"
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
                disabled
              />
              <p class="text-sm text-gray-400">Your email address</p>
            </div>

            <div class="m-4">
              <SellectColor />
            </div>

            <div v-if="form.provider === 'password'" class="m-4">
              <span class="font-bold text-gray-600">Password</span>
              <button class="block m-3 p-1 bg-indigo-100 font-semibold">
                Change password
              </button>
              <p class="text-sm text-gray-400">Change your password</p>
            </div>

            <div class="m-4 border-2 border-red-200 p-3">
              <span class="font-bold text-gray-600">Delete account</span>
              <button
                class="block m-3 p-1 px-3 bg-red-100 font-semibold text-red-600"
              >
                Delete
              </button>
              <p class="text-sm text-gray-400">
                This action will delete your account forever
              </p>
            </div>
          </form>

          <!-- Footer button -->
          <div class="flex justify-end">
            <button
              class="p-1 px-2 m-3 bg-indigo-100 text-indigo-600 font-semibold rounded-md"
              @click="update"
            >
              Update
            </button>
            <button
              class="p-1 px-2 m-3 bg-red-100 text-red-600 font-semibold rounded-md"
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
import swal from "sweetalert";
import Navbar from "../../components/Navbar.vue";
import * as api from "../../api";
export default {
  name: "User",
  components: {
    Navbar
  },
  data() {
    return {
      form: {}
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.state.authUser;
      }
    }
  },

  async mounted() {
    this.form = await api.User.loadCurrentUserData(this.currentUser.uid);
  },

  methods: {
    signOut() {
      api.Auth.signOut().then(() => {
        window.open("/login", "_self");
      });
    },
    update(e) {
      e.target.disabled = true;
      api.User.updateUser(this.currentUser.uid, this.form)
        .then(() => {
          e.target.disabled = false;
          swal("Good job!", "Updated!", "success");
        })
        .catch(error => {
          e.target.disabled = false;
          console.error(error);
          swal("Oop!", "Update failed!", "warning");
        });
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
