<template>
  <div class="signin w-screen h-screen flex">
    <div
      class=" mx-auto my-auto w-full h-full lg:w-4/5 xl:w-2/3 lg:h-2/3 flex rounded-lg shadow-lg overflow-hidden"
    >
      <div
        class="deco w-2/3 h-full flex justify-evenly items-center flex-col px-32"
      >
        <div class="text-center">
          <h1 class="text-7xl text-white font-bold">Login</h1>
          <p class="my-4 text-gray-200 font-semibold">
            Start your day with mini game
          </p>
        </div>

        <div class="provider flex flex-wrap justify-center">
          <button
            class=" bg-blue-400 p-3 m-3 font-mono font-bold text-white rounded-full"
            @click="loginByFacebook"
          >
            Facebook
          </button>
          <button
            class="bg-green-400 p-3 m-3 font-mono font-bold text-white rounded-full"
            @click="loginByGoogle"
          >
            Google
          </button>
        </div>

        <div class="flex items-center">
          <img src="../static/images/logo.png" />
          <h1 class="text-white font-semibold font-mono mx-3">Happy Lottery</h1>
        </div>
      </div>

      <!-- Login / Sign up by email -->
      <div class="bg-white p-10 2xl:p-20">
        <h1 class="text-3xl font-bold text-pink-600">
          {{ register ? "Sign up your world" : "Login to your world" }}
        </h1>
        <form class="m-3 p-3 form-inp">
          <div class="m-4 my-5">
            <label class="font-semibold text-gray-600">Username</label>
            <input
              v-model="form.email"
              type="text"
              placeholder="Nghia"
              autocomplete="username"
            />
          </div>
          <div class="m-4 my-5">
            <label class="font-semibold text-gray-600">Password</label>
            <input
              v-model="form.password"
              type="password"
              value="12345"
              autocomplete="current-password"
            />
          </div>
        </form>
        <button
          class="m-4 font-semibold text-blue-600 text-sm"
          @click="register = !register"
        >
          {{
            register ? "Have an account, Login" : "Not have account, create one"
          }}
        </button>
        <button
          v-show="register"
          class=" block mx-auto bg-pink-700 font-bold text-white p-2 px-4 m-5 rounded-md"
          @click="signUpByEmail"
        >
          Sign up
        </button>
        <button
          v-show="!register"
          class=" block mx-auto bg-pink-700 font-bold text-white p-2 px-4 m-5 rounded-md"
          @click="loginByEmail"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../api";
export default {
  name: "Signin",
  data() {
    return {
      register: false,
      form: {
        email: null,
        password: null
      },
      redirect: null,
    };
  },
  mounted() {
    this.redirect = this.$route.query.redirect || "/";
  },
  methods: {
    loginByEmail(e) {
      // Disbale button
      e.target.disabled = true;

      api.Auth.signIn("email", this.form)
        .then(() => {
          // on success
          e.target.disabled = false;
          window.open(this.redirect, "_self");
        })
        .catch(error => {
          // on error
          e.target.disabled = false;
          api.Extension.showNotification(
            "warning",
            "Error: " + error.code,
            error.message
          );
        });
    },
    loginByGoogle(e) {
      // Disbale button
      e.target.disabled = true;

      api.Auth.signIn("google")
        .then(() => {
          // on success
          e.target.disabled = false;
          window.open(this.redirect, "_self");
        })
        .catch(error => {
          // on error
          e.target.disabled = false;
          api.Extension.showNotification(
            "warning",
            "Error: " + error.code,
            error.message
          );
        });
    },
    loginByFacebook(e) {
      // Disbale button
      e.target.disabled = true;

      api.Auth.signIn("facebook")
        .then(() => {
          // on success
          e.target.disabled = false;
          window.open(this.redirect, "_self");
        })
        .catch(error => {
          // on error
          e.target.disabled = false;
          api.Extension.showNotification(
            "warning",
            "Error: " + error.code,
            error.message
          );
        });
    },
    signUpByEmail(e) {
      // Disbale button
      e.target.disabled = true;

      // Sign up action
      api.Auth.signUp(this.form)
        .then(() => {
          // on success
          e.target.disabled = false;
          api.Extension.showNotification(
            null,
            "Create success",
            "Now you can login to your account and start your world"
          );
        })
        .catch(error => {
          // on error
          e.target.disabled = false;
          this.register = false;
          api.Extension.showNotification(
            "warning",
            "Error: " + error.code,
            error.message
          );
        });
    }
  }
};
</script>

<style lang="scss">
.form-inp {
  input {
    padding: 5px 10px;
    margin: 3px;
    background-color: #80808012;
    width: 100%;

    &:focus {
      outline: brown 2px solid;
      background-color: transparent;
    }
  }
}

.signin {
  background: #ff839d;
}

.deco {
  background-image: url("https://i.pinimg.com/originals/1a/78/13/1a7813c67dfb221c2c81a1c8b1288101.png");
  background-position: center;
  background-size: cover;
}

.provider {
  button {
    min-width: 200px;
  }
}
</style>
