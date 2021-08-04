<template>
  <div class="page">
    <div class="panel animate__animated animate__bounceIn playground">
      <div class="lottery-circle">
        <chart></chart>
      </div>
      <div class="force-wrap">
        <span>Force</span>
        <el-progress :percentage="percentage" :color="colors"></el-progress>
      </div>
    </div>

    <div class="detail-player">
      <!-- online  user -->
      <div class="user panel animate__animated animate__bounceIn">
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

      <div class="history panel animate__animated animate__bounceIn">
        <div class="panel__title">
          <h1>History</h1>
          <span>{{ turn }} turns</span>
        </div>
        <div class="panel__body">
          <div class="panel__item" v-for="item in history" :key="item.id">
            <div class="text-wrap">
              <user-icon
                :item="item.user"
                size="small"
                :hasName="false"
              ></user-icon>
              <p class="panel__item-status">
                <span class="name">{{ item.user.name }}</span> has been in
                <span class="action" v-if="item.action.value === ''">
                  {{ item.action.action }}</span
                >
                <span v-else class="value"> {{ item.action.value }}</span>
              </p>
            </div>
            <span>{{ formatTime(item.timestame) }}</span>
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
      percentage: 20,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      turn: 4,
      lastUserPlay: {
        id: "123",
        hasNickname: false,
        hasImage: true,
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
          id: "789",
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
        {
          id: "101112",
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
        {
          id: "131415",
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
        {
          id: "161718",
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
        {
          id: "192021",
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
      history: [
        {
          id: "abc",
          user: {
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
          action: {
            value: "",
            action: "comein",
          },
          timestame: 1628041002684,
        },
        {
          id: "def",
          user: {
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
          action: {
            value: "",
            action: "comein",
          },
          timestame: 1628041002684,
        },
        {
          id: "ghi",
          user: {
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
          action: {
            value: "",
            action: "comein",
          },
          timestame: 1628041002684,
        },
        {
          id: "mnj",
          user: {
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
          action: {
            value: "",
            action: "comein",
          },
          timestame: 1628041002684,
        },
        {
          id: "yjk",
          user: {
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
          action: {
            value: "",
            action: "comein",
          },
          timestame: 1628041002684,
        },
      ],
    };
  },
  methods: {
    processTime(time) {
      let bet = (Date.now() - time) / 1000;
      if (bet < 60) return "under 1 min";
      else if (bet <= 3600) return `${Math.floor(bet / 60)} m`;
      else return `${Math.floor(bet / 3600)} h`;
    },
    formatTime(time) {
      let t = new Date(time);
      let min = t.getMinutes();
      let hour = t.getHours();
      return `${hour}:${min}`;
    },
  },
};
</script>