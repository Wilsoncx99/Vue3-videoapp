<template>
  <div class="topbar">
    <div></div>
    <div>{{ title }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  height: 12.821vw;
  background-color: #ffffff;
  div {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4.103vw;
  }
}
</style>