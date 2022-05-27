<template>
  <div>111</div>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/Home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/Leavecenter" icon="search">动态</van-tabbar-item>
    <van-tabbar-item  icon="friends-o">会员购</van-tabbar-item>
    <van-tabbar-item to="/Mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Shopcenter",
  setup() {
    const active = ref(2);
    return { active };
  },
};
</script>

<style>
</style>