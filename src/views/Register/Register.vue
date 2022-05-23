<template>
  <div class="wrapper">
    <div class="iconbox">
      <img class="iconsize" src="@/assets/logo.png" />
    </div>
    <div class="formbox">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            placeholder="请输入用户名"
            clearable
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="请输入密码"
            clearable
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="请输入确认密码"
            clearable
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            @click="handlelogin()"
            round
            block
            type="primary"
            native-type="submit"
          >
            注册
          </van-button>
        </div>
      </van-form>
      <div class="regbar">
        <div class="box" @click="back()">返回登陆</div>
      </div>
    </div>
    <div class="submitbox"></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  setup() {
    const username = ref("");
    const password = ref("");
    // localStorage.setItem("username", username.value);
    // localStorage.setItem("password", password.value);
    const router = useRouter();
    const handlelogin = () => {
      localStorage.isLogin = true;
      router.push({ name: "Login" });
    };
    const back = () => history.back();

    return { username, password, handlelogin, back };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  .iconbox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    .iconsize {
      height: 5rem;
      width: 5rem;
    }
  }
  .formbox {
    flex-grow: 1;
    .regbar {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 3rem;
      color: grey;
      .box {
        border-right: solid 0.1rem grey;
        border-left: solid 0.1rem grey;
        padding: 0 1rem 0 1rem;
      }
    }
  }
  .submitbox {
    flex-grow: 1;
  }
}
</style>
