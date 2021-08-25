<template>
  <div class="m-3">
    <h1
      class="px-3 text-xl px-1 font-bold w-max rounded-md"
      :class="{
        'text-gray-400': gray,
        'bg-gray-100': gray,
        'text-red-400': red,
        'bg-red-100': red,
        'text-blue-500': blue,
        'bg-blue-100': blue,
        'text-indigo-400': indigo,
        'bg-indigo-100': indigo,
        'text-green-400': green,
        'bg-green-100': green,
        'text-yellow-400': yellow,
        'bg-yellow-100': yellow,
        'text-pink-500': pink,
        'bg-pink-100': pink,
        'text-purple-400': purple,
        'bg-purple-100': purple
      }"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "HeaderPanel",
  props: {
    color: {
      type: String,
      default: "gray"
    },
    title: {
      type: String,
      default: "Title"
    }
  },

  computed: {
    gray: {
      get() {
        return this.color === "gray";
      }
    },
    red: {
      get() {
        return this.color === "red";
      }
    },
    blue: {
      get() {
        return this.color === "blue";
      }
    },
    indigo: {
      get() {
        return this.color === "indigo";
      }
    },
    green: {
      get() {
        return this.color === "green";
      }
    },
    yellow: {
      get() {
        return this.color === "yellow";
      }
    },
    pink: {
      get() {
        return this.color === "pink";
      }
    },
    purple: {
      get() {
        return this.color === "purple";
      }
    }
  }
};
</script>
