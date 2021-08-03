<template>
  <div class="page">
    <div class="lottery-circle panel">
      <chart></chart>
    </div>

    <div class="detail-player">
      <!-- online  user -->
      <div class="user panel">
        <div class="panel__title">
          <h1>Online user</h1>
          <span>{{ users.length }} users</span>
        </div>
        <!-- List of user -->
        <div class="panel__body">
          <div class="panel__item" v-for="item in users" :key="item.id">
            <user-icon :item="item"></user-icon>

            <div class="panel__item-status">
              <span>{{ processTime(item.comeinTime) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="previous-turn panel">
        <div class="panel__title">
          <h1>Last turn</h1>
           <span>{{ users.length }} turns</span>
        </div>
        <div class="panel__body">
          <div class="panel__item">
            <user-icon :item="lastUserPlay"></user-icon>
            <h1 class="panel__item-status">have been in <span>Do ngu</span></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import UserIcon from "../components/UserIcon.vue";
export default {
  components: {
    Chart,
    UserIcon,
  },
  name: "play",
  data() {
    return {
      turn: 4,
      lastUserPlay: {
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
      },
      users: [
        {
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
          comeinTime: 1628006700096,
        },
        {
          id: "456",
          hasNickname: false,
          hasImage: true,
          hasIcon: false,
          name: "abc,xyz",
          nickname: "bo cap chua",
          image:
            "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
          icon: "feedback",
          shortName: "BC",
          color: "blue",
          comeinTime: 1628006700096,
        },
        {
          id: "123",
          hasNickname: true,
          hasImage: false,
          hasIcon: false,
          name: "abc,xyz",
          nickname: "bo cap chua",
          image:
            "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/186566653_457732428659937_110629599515262609_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1RjdlEUAE_AAX-T_n2d&tn=Ss1qQxEVQs5aJzur&_nc_ht=scontent.fhan4-1.fna&oh=b90a83f7ecf8a61d44e32a5642b0249c&oe=612D9B5D",
          icon: "feedback",
          shortName: "BC",
          color: "blue",
          comeinTime: 1628006700096,
        },
      ],
    };
  },
  methods: {
    processTime(time) {
      let bet = (Date.now() - time) / 1000;
      if (bet < 60) return "under 1 min";
      else return `${Math.floor(bet / 60)} mins`;
    },
  },
};
</script>