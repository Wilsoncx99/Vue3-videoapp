<template>
  <div class="settingbtn">
    <div class="a">
      <div class="box">
        <p>{{ info }}</p>
      </div>
    </div>
    <span>{{userinfo}}</span>
    <div class="back"><img src="@/assets/4@2x.png" /></div>
  </div>
</template>

<script>
export default {
  props: ["info","userinfo"],
};
</script>

<style lang="scss" scoped>
.settingbtn {
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 5%;
  margin: 0 5% 0 5%;
  .a {
    width: 95%;
    font-size: 7.692vw;
    .box {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    img {
      height: 11.538vw;
      width: 11.538vw;
    }
    p {
      font-size: 5.128vw;
      margin-left: 3%;
    }
  }
  .rightbtn {
    height: 5.128vw;
    width: 4.615vw;
  }
  .back {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 5%;
    img {
      width: 2.564vw;
      height: 3.077vw;
    }
  }
}
</style>