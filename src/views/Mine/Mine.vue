<template>
  <div class="wrapper">
    <div class="nav" style="height: 3%"></div>
    <div class="topbar">
      <img class="iconsize" src="@/assets/icon.jpg" />
      <div class="userinfo">
        <div class="username">{{ username }}</div>
        <div class="usergold">B币:{{ bcoin }} 硬币{{ coin }}</div>
      </div>
    </div>
    <div class="threebox">
      <div class="a">
        <div>0</div>
        <div>动态</div>
      </div>
      <div class="b">
        <div>0</div>
        <div>分享</div>
      </div>
      <div class="c">
        <div>0</div>
        <div>粉丝</div>
      </div>
    </div>
    <div class="btnbar">
      <BtnBar @click="gotosetting()" info="设置"> </BtnBar>
      <div class="quit"></div>
      <van-button type="primary" size="large">退出登陆</van-button>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">动态</van-tabbar-item>
      <van-tabbar-item icon="friends-o">会员购</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BtnBar from "@/components/BtnBar.vue";

export default {
  components: {
    BtnBar,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Mine",
  setup() {
    const value = ref("");
    const active = ref(3);
    const tab = ref(0);
    const router = useRouter();
    const gotosetting = () => {
      router.push({ name: "Setting" });
    };
    const quit = () => {
      router.push({ name: "Login" });
    };
    return { value, active, tab, gotosetting, quit };
  },

  data() {
    return {
      username: "打工人Wilson",
      bcoin: "10",
      coin: "5",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .topbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5%;
    img {
      padding: 0 0 0 2%;
      height: 4rem;
      width: 4rem;
    }
    .userinfo {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 0 0 0 3%;
      .username {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 50%;
        color: red;
      }
      .usergold {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 50%;
      }
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    .messagebar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    .searchbar {
      flex-grow: 1;
    }
  }
  .threebox {
    display: flex;
    flex-direction: row;
    height: 10%;
    span {
      display: block;
    }
    .a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-grow: 1;
      margin: 7% 0 7% 0;
      border-right: solid 0.1rem gray;
    }
    .b {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-grow: 1;
      margin: 7% 0 7% 0;
      border-right: solid 0.1rem gray;
    }
    .c {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-grow: 1;
    }
  }
  .settingbar {
    height: 80%;
    .spacebar {
      height: 2%;
      width: 100%;
      background: #f7f7f7;
    }
    .settingbtn {
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      height: 8%;
      margin: 0 5% 0 5%;
      .a {
        width: 95%;
        font-size: 30px;
        .box {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        img {
          @media only screen and (max-width: 500px) {
            height: 30px;
            width: 30px;
          }
          height: 45px;
          width: 45px;
        }
        p {
          @media only screen and (max-width: 500px) {
            font-size: 18px;
          }
          font-size: 20px;
          margin-left: 3%;
        }
      }
      .rightbtn {
        height: 20px;
        width: 18px;
      }
      .back {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        width: 5%;
        img {
          @media only screen and (max-width: 500px) {
            width: 8px;
            height: 9px;
          }
          width: 10px;
          height: 12px;
        }
      }
    }
  }
  .quitbtn {
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 8%;
    margin: 0 5% 0 5%;
    .a {
      width: 95%;
      font-size: 30px;
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        font-size: 15px;
      }
    }
  }
  .btnbar {
    display: flex;
    flex-direction: column;
    height: 76%;
    .van-button {
      border-radius: 2rem;
      margin-bottom: 5%;
      width: 50%;
      align-self: center;
    }
    .quit {
      display: flex;
      flex-grow: 1;
      flex-direction: column-reverse;
    }
  }
}
</style>