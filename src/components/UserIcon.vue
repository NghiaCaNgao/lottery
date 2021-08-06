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
      v-if="hasName"
      class="label"
      :class="{
        'label-red': item.color === 'red',
        'label-green': item.color === 'green',
        'label-blue': item.color === 'blue',
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
          name: "abc,xyz",
          nickname: "bo cap chua",
          image:
            "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
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
    hasName: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>