<template>
  <div class="wrapper">
    <van-nav-bar
      title="设置"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    />
    <div class="settingbar">
      <div class="settingbtn" @click="gotoaccsetting()">
        <div class="a">
          <div class="box">
            <p>账号资料</p>
          </div>
        </div>
        <div class="back"><img src="@/assets/4@2x.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Setting",
  setup() {
    const value = ref("");
    const active = ref(3);
    const tab = ref(0);
    const onClickLeft = () => history.back();
    return { value, active, tab, onClickLeft };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .settingbar {
    height: 80%;
    .spacebar {
      height: 2%;
      width: 100%;
      background: #f7f7f7;
    }
    .settingbtn {
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      height: 8%;
      margin: 0 5% 0 5%;
      .a {
        width: 95%;
        font-size: 30px;
        .box {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        img {
          @media only screen and (max-width: 500px) {
            height: 30px;
            width: 30px;
          }
          height: 45px;
          width: 45px;
        }
        p {
          @media only screen and (max-width: 500px) {
            font-size: 18px;
          }
          font-size: 20px;
          margin-left: 3%;
        }
      }
      .rightbtn {
        height: 20px;
        width: 18px;
      }
      .back {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        width: 5%;
        img {
          @media only screen and (max-width: 500px) {
            width: 8px;
            height: 9px;
          }
          width: 10px;
          height: 12px;
        }
      }
    }
  }
}
</style>