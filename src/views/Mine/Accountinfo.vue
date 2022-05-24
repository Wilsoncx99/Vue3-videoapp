<template>
  <div class="wrapper">
    <van-nav-bar
      title="账号资料"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    />
    <div class="settingbtn">
      <div class="a">
        <div class="box">
          <p>头像</p>
          <van-uploader v-model="fileList" max-count="1" />
        </div>
      </div>
      <div class="back"><img src="@/assets/4@2x.png" /></div>
    </div>

    <BtnBar @click="changename()" info="昵称"></BtnBar>
    <BtnBar @click="changesex()" info="性别"></BtnBar>
    <BtnBar @click="changebday()" info="出生年月"></BtnBar>
    <BtnBar @click="changeinfo()" info="个性签名"></BtnBar>

    <div @click="quit()" class="settingbtn">
      <div class="a">
        <div class="box">
          <p>退出登陆</p>
        </div>
      </div>
    </div>
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
  name: "Accountinfo",
  setup() {
    const value = ref("");
    const active = ref(3);
    const tab = ref(0);
    const router = useRouter();
    const changename = () => {
      router.push({ name: "Changename" });
    };
    const changesex = () => {
      router.push({ name: "Changesex" });
    };
    const changebday = () => {
      router.push({ name: "Changebday" });
    };
    const quit = () => {
      localStorage.isLogin = false;
      router.push({ name: "Login" });
    };
    const fileList = ref([
      { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
    ]);
    const onClickLeft = () => history.back();

    return {
      value,
      active,
      tab,
      fileList,
      onClickLeft,
      changename,
      changesex,
      changebday,
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
        .van-uploader {
          opacity: 0;
        }
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
</style>