<template>
  <div class="user__player-item__display">
    <div
      class="icon flex-center"
      :class="{
        'icon-red': item.color === 'red',
        'icon-green': item.color === 'green',
        'icon-blue': item.color === 'blue',
        'icon-large': size === 'large',
        'icon-small': size === 'small',
      }"
    >
      <div v-if="item.hasImage" class="icon-image">
        <img :src="item.image" :alt="'avatar of' + item.name"/>
      </div>
      <div v-else>
        <unicon v-if="item.hasIcon" :name="item.icon"></unicon>
        <span v-else>{{ item.shortName }}</span>
      </div>
    </div>
    <!-- end of icon condition -->
    <div v-if="hasName">
      <h1 v-if="item.hasNickname">{{ item.nickname }}</h1>
      <h1 v-else>{{ item.name }}</h1>
    </div>
  </div>
  <!-- end of icon condition -->
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
          hasImage: false,
          hasIcon: true,
          name: "abc,xyz",
          nickname: "bo cap chua",
          image:
            "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
          icon: "feedback",
          shortName: "BC",
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