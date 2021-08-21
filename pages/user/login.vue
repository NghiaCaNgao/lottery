<template>
  <div class="signin w-screen h-screen flex">
    <div
      class="
        mx-auto
        my-auto
        w-full
        h-full
        lg:w-4/5
        xl:w-2/3
        lg:h-2/3
        flex
        rounded-lg
        shadow-lg
        overflow-hidden
      "
    >
      <div
        class="
          deco
          w-2/3
          h-full
          flex
          justify-evenly
          items-center
          flex-col
          px-32
        "
      >
        <div class="text-center">
          <h1 class="text-7xl text-white font-bold">Login</h1>
          <p class="my-4 text-gray-200 font-semibold">
            Start your day with mini game
          </p>
        </div>

        <div class="provider flex flex-wrap justify-center">
          <button
            class="
              bg-blue-400
              p-3
              m-3
              font-mono font-bold
              text-white
              rounded-full
            "
          >
            Facebook
          </button>
          <button
            class="
              bg-green-400
              p-3
              m-3
              font-mono font-bold
              text-white
              rounded-full
            "
          >
            Google
          </button>
        </div>

        <div class="flex items-center">
          <img src="../../static/images/logo.png" />
          <h1 class="text-white font-semibold font-mono mx-3">Happy Lottery</h1>
        </div>
      </div>
      <!-- By pass -->
      <div class="bg-white p-10 2xl:p-20">
        <h1 class="text-3xl font-bold text-pink-600">
          {{ register ? "Sign up your world" : "Login to your world" }}
        </h1>
        <form class="m-3 p-3 form-inp">
          <div class="m-4 my-5">
            <label class="font-semibold text-gray-600">Username</label>
            <input type="text" placeholder="Nghia" />
          </div>
          <div class="m-4 my-5">
            <label class="font-semibold text-gray-600">Password</label>
            <input type="password" value="12345" />
          </div>
        </form>
        <button
          class="m-4 font-semibold text-blue-600 text-sm"
          @click="register = !register"
        >
          {{
            register ? "Not have account, create one" : "Have an account, Login"
          }}
        </button>
        <button class="block mx-auto bg-pink-700 font-bold text-white p-2 px-4 m-5 rounded-md">{{ register ? "Sign up" : "Login" }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      register: false,
    };
  },
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
