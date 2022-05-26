<template>
  <van-nav-bar
    title="昵称"
    right-text="保存"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />

  <div class="input">
    <div class="name">
      <van-field v-model="username" clearable placeholder="请输入新昵称" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Changename",
  setup() {
    const username = ref("");
    const router = useRouter();
    const onClickLeft = () => history.back();
    const onClickRight = () => {
      router.push({
        path: "/Accountinfo",
        query: {
          username: username.value,
        },
      });
    };

    return {
      onClickLeft,
      username,
      onClickRight,
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
  .name {
    padding: 3% 0 0 0;
  }
}
</style>