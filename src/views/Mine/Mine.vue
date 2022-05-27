<template>
  <div class="wrapper">
    <div class="userbox">
      <div class="icon">
        <img src="@/assets/icon.jpg" />
      </div>
      <div class="infobox">
        <div class="userinfo">
          <div class="box">
            <div>{{ fans }}</div>
            <div>粉丝</div>
          </div>
          <div class="split"></div>
          <div class="box">
            <div>{{ follow }}</div>
            <div>关注</div>
          </div>
          <div class="split"></div>
          <div class="box">
            <div>{{ like }}</div>
            <div>获赞</div>
          </div>
        </div>
        <div class="changeinfo">
          <div class="infobtn" @click="gotosetting()">编辑资料</div>
        </div>
      </div>
    </div>
    <div class="username">
      <span>{{ username }}</span>
      <div>这个人很神秘，什么都没有写</div>
    </div>

    <van-tabs v-model:active="tab">
      <van-tab title="动态"> </van-tab>
      <van-tab title="视频"> </van-tab>
    </van-tabs>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/Leavecenter" icon="search">动态</van-tabbar-item>
      <van-tabbar-item to="/Shopcenter" icon="friends-o">会员购</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Mine",
  setup() {
    const value = ref("");
    const active = ref(3);
    const tab = ref(0);
    const fans = ref(0);
    const follow = ref(0);
    const like = ref(0);
    const username = ref("打工人Wilson");
    const router = useRouter();
    const gotosetting = () => {
      router.push({ name: "Accountinfo" });
    };
    const quit = () => {
      router.push({ name: "Login" });
    };
    return {
      value,
      active,
      tab,
      fans,
      follow,
      like,
      username,
      gotosetting,
      quit,
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
  .userbox {
    display: flex;
    flex-direction: row;
    height: 30.769vw;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;
      img {
        height: 25.641vw;
        width: 28.205vw;
      }
    }
  }
  .infobox {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .userinfo {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 50%;
      .box {
        width: 34%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
    .split {
      margin: 3.846vw 0 3.846vw 0;
      border: solid 0.101px grey;
    }
    .changeinfo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50%;
      .infobtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 61.538vw;
        height: 7.692vw;
        color: #ff9db5;
        border-radius: 1.282vw;
        border: solid 0.256vw #ff9db5;
      }
    }
  }
  .username {
    div {
      margin: 1vw 0 1vw 2.564vw;
      font-size: 3.5vw;
      color: grey;
    }
    span {
      margin-left: 2.564vw;
      font-size: 4.615vw;
    }
  }
  van-tab {
    border: solid black 1px;
  }
}
</style>