<template>
  <div class="h-full flex flex-col overflow-y-scroll bg-white shadow-lg rounded-md m-3">
    <HeaderPanel color="green" title="Online User" />

    <div class="h-full m-3 p-2 overflow-y-scroll">
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>

    <div class="input-message flex items-center p-2 px-5">
      <input
        type="text"
        placeholder="Search"
        class="m-3 p-2 px-3 bg-indigo-50 rounded-full focus:outline-none w-full"
      />
      <client-only>
        <button>
          <unicon name="search"></unicon>
        </button>
      </client-only>
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
import HeaderPanel from "./HeaderPanel.vue";
export default {
  name: "OnlineUser",
  components: {
    User,
    HeaderPanel
  }
};
</script>
