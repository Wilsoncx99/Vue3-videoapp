<template>
  <div>123</div>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/Home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">动态</van-tabbar-item>
    <van-tabbar-item to="/Shopcenter" icon="friends-o">会员购</van-tabbar-item>
    <van-tabbar-item to="/Mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Leavecenter",
  setup() {
    const tab = ref(1);
    const active = ref(1);
    return { tab, active };
  },
};
</script>

<style>
</style>