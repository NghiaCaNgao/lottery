<template>
  <div>
    <h1 class="notify_title">{{ title }}</h1>
    <h2 class="notify_text">{{ text }}</h2>
  </div>
</template>
<script>
export default {
  name: "AlertDefault",
  props: {
    title: {
      type: String,
      default() {
        return "Notification";
      }
    },
    text: {
      type: String,
      default() {
        return "Nothing to show";
      }
    }
  }
};
</script>

<style lang="scss">
@mixin notify-mode($color) {
  svg {
    color: $color;
  }
  .notify_title {
    color: $color;
  }
}

.Vue-Toastification__icon {
  margin: 0 10px 0 0 !important;
}
.Vue-Toastification__toast {
  .notify_text {
    color: rgb(192, 192, 192);
    font-size: 0.8em;
    margin: 5px 0;
  }
}
.Vue-Toastification__toast {
  background-color: white !important;
  padding: 10px;
  .notify_title {
    font-weight: 700;
    font-size: 1em;
  }
  &.Vue-Toastification__toast--default {
    @include notify-mode(rgb(85, 85, 242));
  }
  &.Vue-Toastification__toast--warning {
    @include notify-mode(rgb(213, 33, 33));
  }
}
</style>
