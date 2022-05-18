<template>
  <div class="wrapper">
    <div class="iconbox">
      <img class="iconsize" src="../assets/logo.png" />
    </div>
    <div class="formbox">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="submitbox"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  .iconbox {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    .iconsize {
      height: 5rem;
      width: 5rem;
    }
  }
  .formbox {
    height: 30%;
  }
  .submitbox {
    height: 30%;
  }
}
</style>
