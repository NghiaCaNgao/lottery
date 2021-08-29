<template>
  <div
    class="m-5 p-3 bg-white rounded-lg flex justify-evenly items-center shadow-lg"
  >
    <!-- Logo -->
    <div>
      <img src="../static/images/logo.png" />
    </div>
    <!-- Room INfo -->
    <div>
      <span
        class="bg-indigo-50 text-indigo-500 rounded-md font-semibold p-1 m-2"
      >
        {{ host }}
      </span>
      <span
        class="bg-yellow-50 text-yellow-500 rounded-md font-semibold p-1 m-2"
      >
        {{ roomName }}
      </span>
    </div>
    <!-- component views -->
    <div class="group-toogle-btn">
      <client-only>
        <button
          :class="{
            active: views.info
          }"
          @click="updateViews('info')"
        >
          <unicon name="share"></unicon>
        </button>
        <button
          :class="{
            active: views.onlineUser
          }"
          @click="updateViews('onlineUser')"
        >
          <unicon name="users-alt"></unicon>
        </button>
        <button
          :class="{
            active: views.history
          }"
          @click="updateViews('history')"
        >
          <unicon name="history-alt"></unicon>
        </button>
        <button
          :class="{
            active: views.chat
          }"
          @click="updateViews('chat')"
        >
          <unicon name="chat"></unicon>
        </button>
        <button
          :class="{
            active: views.rule
          }"
          @click="updateViews('rule')"
        >
          <unicon name="ruler"></unicon>
        </button>
      </client-only>
    </div>

    <div class="flex items-center">
      <client-only>
        <MenuContext
          type="icon"
          mode="notification_box"
          icon="bell"
          :data_notification="data_notification"
        />
        <MenuContext type="icon" :data_menu_context="data_menu_context" />
        <button
          id="signout_btn"
          class="bg-red-100 p-2 rounded-full flex justify-center items-center m-2"
          @click="quitRoom"
        >
          <unicon name="signout"></unicon>
        </button>
      </client-only>
    </div>
  </div>
</template>
<script>
import MenuContext from "./MenuContext.vue";
export default {
  name: "HeaderGame",
  components: {
    MenuContext
  },
  data() {
    return {
      host: "Nghia",
      roomName: "Hallo",
      data_menu_context: [
        {
          id: "0",
          href: "/user",
          text: "Profile",
          icon: "user"
        },
        {
          id: "1",
          href: "/play",
          text: "Play center",
          icon: "tennis-ball"
        },
        {
          id: "2",
          href: "/create",
          text: "Create Room",
          icon: "plus-circle"
        },
        {
          id: "3",
          href: "/user/games",
          text: "Your games",
          icon: "shop"
        }
      ],
      data_notification: [
        {
          id: "0",
          title: "Aw",
          text: "Cho gi an nay"
        },
        {
          id: "1",
          title: "May oi",
          text: "Doi lam roi"
        },
        {
          id: "2",
          title: "An shit ko. Tao cho ca mot dong luon ne",
          text: "Thich noi nua tao cho an ca bat shit"
        }
      ]
    };
  },
  computed: {
    views() {
      return this.$store.state.playground.views;
    }
  },
  methods: {
    updateViews(view) {
      this.$store.commit("playground/updateViews", view);
    },
    quitRoom() {
      window.open("/play", "_self");
    }
  }
};
</script>

<style lang="scss">
.group-toogle-btn {
  display: flex;
  button {
    margin: 5px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #ff5d90;
    }
    &.active {
      background-color: #fadee2;
    }
  }
}
#signout_btn {
  svg {
    fill: hotpink;
  }
}
</style>
