<template>
  <div class="wrapper">
    <div class="addressbar">
      <div>您所在的位置</div>
    </div>
    <div class="searchbar">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="tabbar">
      <van-tabs v-model:active="tab">
        <van-tab title="直播">1</van-tab>
        <van-tab title="视频">2</van-tab>
      </van-tabs>
    </div>
  </div>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">动态</van-tabbar-item>
    <van-tabbar-item icon="friends-o">会员购</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  setup() {
    const value = ref("");
    const active = ref(0);
    const tab = ref(0);
    return { value, active, tab };
  },
  data() {
    return {
      username: "",
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
  .addressbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5%;
  }
}
</style>
