<template>
  <div class="wrapper">
    <Top-Bar title="注册bilibili"></Top-Bar>
    <div style="height: 5.128vw"></div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userinfo.name"
          name="用户名"
          label="用户名"
          placeholder="请填写用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="userinfo.phone"
          name="密码"
          label="手机号"
          placeholder="请填写手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="userinfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请填写密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          color="#ff9db5"
          round
          block
          type="primary"
          native-type="submit"
        >
          注册
        </van-button>
      </div>
    </van-form>
    <div class="back" @click="back()">返回</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { reactive } from "vue";
import TopBar from "@/components/TobBar.vue";
import { register } from "@/api/register";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  components: {
    TopBar,
  },
  setup() {
    const userinfo = reactive({
      name: "",
      password: "",
      phone: "",
      legalPerson: "changliang",
    });

    const username = ref("");
    const password = ref("");
    const tel = ref("");
    const router = useRouter();
    const back = () => history.back();

    const onSubmit = () => {
      register(userinfo)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          router.push({ name: "Login" });
        });
    };

    return { username, password, tel, userinfo, onSubmit, back };
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
  .van-cell-group {
    padding: 0;
    margin: 0;
  }
  .van-button {
    margin-top: 5.128vw;
    border-radius: 5.128vw;
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.077vw;
  }
}
</style>
