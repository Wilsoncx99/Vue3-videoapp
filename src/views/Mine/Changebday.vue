<template>
  <van-nav-bar
    title="出生年月"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Changebday",
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>

<style>
</style>