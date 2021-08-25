<template>
  <div class="h-full flex flex-col overflow-x-scroll bg-white shadow-lg rounded-md m-3">
    <HeaderPanel color="indigo" title="Rule" />

    <div class="my-3">
      <h2 class="mx-3 font-semibold text-green-300">Next player</h2>
      <User :isFill="true"/>
    </div>

    <div class="h-full flex flex-col overflow-y-scroll my-3">
      <h2 class="mx-3 font-semibold text-gray-500">Rule</h2>
      <div
        class=" h-full max-h-full bg-gray-100 rounded-md mx-3 my-1 p-3 overflow-y-scroll"
      >
        <ul class="list-disc text-gray-500 font-bold list-inside">
          <li>Force mode</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
          <li>Discard last result</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
import HeaderPanel from "./HeaderPanel.vue";
export default {
  name: "Rule",
  components: {
    User,
    HeaderPanel
  }
};
</script>
