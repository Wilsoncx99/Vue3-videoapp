<template>
  <div class="wrapper">
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '20%' }"
    >
      <div class="popup">
        <div class="btn" @click="boy()">男</div>
        <div class="btn" @click="girl()">女</div>
        <div class="btn" @click="serect()">保密</div>
        <div class="btn" @click="offPopup">取消</div>
      </div>
    </van-popup>

    <van-nav-bar
      title="账号资料"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    />
    <!-- <div class="settingbtn">
      <div class="a">
        <div class="box">
          <p>头像</p>
          <van-uploader v-model="fileList" max-count="1" />
        </div>
      </div>
      <div class="back"><img src="@/assets/4@2x.png" /></div>
    </div> -->

    <BtnBar @click="changename()" info="昵称" :userinfo="data"></BtnBar>
    <BtnBar @click="showPopup" info="性别" :userinfo="sex"></BtnBar>
    <BtnBar @click="changebday()" info="出生年月"></BtnBar>
    <BtnBar @click="changeinfo()" info="个性签名"></BtnBar>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
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
    const route = useRoute();
    const show = ref(false);
    const data = route.query.username;
    const sex = ref("");

    const showPopup = () => {
      show.value = true;
    };
    const offPopup = () => {
      show.value = false;
    };

    const boy = () => {
      sex.value = "男";
      show.value = false;
    };
    const girl = () => {
      sex.value = "女";
      show.value = false;
    };
    const serect = () => {
      sex.value = "保密";
      show.value = false;
    };
    const changename = () => {
      router.push({ name: "Changename" });
    };
    const changeinfo = () => {
      router.push({ name: "Changeinfo" });
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
      show,
      data,
      sex,
      onClickLeft,
      changename,
      changeinfo,
      changebday,
      quit,
      showPopup,
      offPopup,
      boy,
      girl,
      serect,
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

  .popup {
    display: flex;
    flex-direction: column;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 2.5rem;
      border: grey solid 0.003vw;
    }
  }
}
</style>