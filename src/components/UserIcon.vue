<template>
  <div class="user__player-item__display">
    <div
      class="icon"
      :class="{
        'icon-large': size === 'large',
        'icon-small': size === 'small',
      }"
    >
      <div class="icon-image">
        <img :src="item.image" :alt="'avatar of' + item.name" />
      </div>
    </div>

    <div
      class="label"
      :class="{
        'label-red': item.color === 'red',
        'label-green': item.color === 'green',
        'label-blue': item.color === 'blue',
        'label-small': size === 'small',
      }"
    >
      <span v-if="item.hasNickname">{{ item.nickname }}</span>
      <span v-else>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-icon",
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: "123",
          hasNickname: false,
          name: "unknown",
          nickname: "unknow",
          image: null,
          color: "blue",
        };
      },
    },
    size: {
      type: String,
      default() {
        return "large";
      },
    },
  },
};
</script>