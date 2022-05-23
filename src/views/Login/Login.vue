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
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            @click="handlelogin()"
            round
            block
            type="primary"
            native-type="submit"
          >
            登陆
          </van-button>
        </div>
      </van-form>
      <div class="regbar">
        <div class="box" @click="handlereg()">立即注册</div>
        <div>忘记密码</div>
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
  name: "Login",
  setup() {
    let username = ref("");
    let password = ref("");
    // username = localStorage.getItem("username");
    // password = localStorage.getItem("password");

    const router = useRouter();
    const handlelogin = () => {
      localStorage.isLogin = true;
      router.push({ name: "Home" });
    };
    const handlereg = () => {
      router.push({ name: "Register" });
    };
    return { username, password, handlelogin, handlereg };
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
        padding: 0 1rem 0 0;
        margin-right: 1rem;
      }
    }
  }
  .submitbox {
    flex-grow: 1;
  }
}
</style>
