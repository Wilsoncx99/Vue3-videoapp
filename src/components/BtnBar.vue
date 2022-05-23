<template>
  <div class="settingbtn">
    <div class="a">
      <div class="box">
        <p>{{ info }}</p>
      </div>
    </div>
    <div class="back"><img src="@/assets/4@2x.png" /></div>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>

<style lang="scss" scoped>
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
</style>