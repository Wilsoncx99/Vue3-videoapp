<template>
  <van-nav-bar
    title="出生年月"
    right-text="保存"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />

  <div class="bday">日期:{{ currentDate }}</div>
  <div class="nav" style="height: 30%"></div>

  <van-datetime-picker
    v-model="currentDate"
    type="date"
    filters
    :min-date="minDate"
    :max-date="maxDate"
    :show-toolbar="false"
  />
</template>

<script>
import { ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Changebday",
  setup() {
    const currentDate = ref(new Date());
    const onClickLeft = () => history.back();

    return {
      onClickLeft,
      minDate: new Date(1920, 1, 1),
      maxDate: new Date(),
      currentDate,
    };
  },
};
</script>

<style lang="scss" scoped>
// :deep(.van-picker__toolbar) {
//   opacity: 0;
// }
.bday {
  height: 20%;
  width: 100%;
}
</style>