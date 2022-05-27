<template>
  <div class="wrapper">
    <div class="iconbox">
      <img class="iconsize" src="@/assets/logo.jpeg" />
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
        <div style="margin: 16.002px">
          <van-button
            color="#ff9db5"
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
      </div>
    </div>
    <div class="submitbox"></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { Toast } from "vant";
import { useRoute } from "vue-router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    const route = useRoute();
    const router = useRouter();

    username.value = route.query.username;
    password.value = route.query.password;

    console.log(username);
    console.log(password);

    const handlelogin = () => {
      localStorage.isLogin = true;
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      Toast.success("登陆成功");
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
  background-color: #ffffff;
  .iconbox {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vw;
    .iconsize {
      height: 50vw;
      width: 60vw;
    }
  }
  .formbox {
    flex-grow: 1;
    .regbar {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 2.564vw;
      color: grey;
    }
  }
  .submitbox {
    flex-grow: 1;
  }
}
</style>
