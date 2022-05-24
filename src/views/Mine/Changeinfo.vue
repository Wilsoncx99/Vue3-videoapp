<template>
  <van-nav-bar
    title="个性签名"
    right-text="保存"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <div class="wrapper">
    <div class="nav" style="height: 1%"></div>

    <van-cell-group inset>
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="20"
        placeholder="请输入个性签名"
        show-word-limit
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Changeinfo",
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #f7f7f7;
  height: 100%;
}
</style>