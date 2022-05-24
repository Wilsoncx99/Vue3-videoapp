<template>
  <van-nav-bar
  title="标题"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</template>

<script>
export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: "Changesex",
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