<template>
  <van-nav-bar
  title="昵称"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</template>

<script>
export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: "Changename",
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