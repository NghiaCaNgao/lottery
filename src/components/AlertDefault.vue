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