<template>
  <div>
    <h1 class="no_title">{{ title }}</h1>
    <h2 class="no_context">{{ context }}</h2>
  </div>
</template>
<script>
export default {
  name: "alert-default",
  props: {
    title: {
      type: String,
      default() {
        return "Notification";
      },
    },
    context: {
      type: String,
      default() {
        return "Nothing to show";
      },
    },
  },
};
</script>

<style lang = "scss">
@import "../style/mixin.scss";

.Vue-Toastification__icon {
  margin: 0 10px 0 0 !important;
}
.Vue-Toastification__toast {
  .no_context {
    color: var(--text-disable);
    font-size: 0.8em;
    margin: 5px 0;
  }
}
.Vue-Toastification__toast.Vue-Toastification__toast--default.top-center {
  background-color: white;
  svg {
    color: var(--text-blue);
  }
  @include box-shadow;
  .no_title {
    color: var(--text-blue);
    font-weight: 700;
    font-size: 1em;
  }
}
</style>