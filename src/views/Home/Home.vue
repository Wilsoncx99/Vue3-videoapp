<template>
  <div class="wrapper">
    <div class="topbar">
      <div class="icon">
        <img src="@/assets/logo.png" />
      </div>
      <div class="searchbar">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div @click="gotomine()" class="messagebar">
        <img src="@/assets/myicon.svg" />
      </div>
    </div>

    <div class="tabbar">
      <van-tabs v-model:active="tab" swipe-threshold="3">
        <van-tab title="直播">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <div style="min-height: 100vh">
              <div class="videolist">
                <div v-for="(item,index) in category" :key="index" class="video"></div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="动画">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <p style="min-height: 100vh">视频内容</p>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="番剧">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <p style="min-height: 100vh">视频内容</p>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="原创">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <p style="min-height: 100vh">视频内容</p>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="音乐">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <p style="min-height: 100vh">视频内容</p>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="舞蹈">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <p style="min-height: 100vh">视频内容</p>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/Leavecenter" icon="search">动态</van-tabbar-item>
    <van-tabbar-item to="/Shopcenter" icon="friends-o">会员购</van-tabbar-item>
    <van-tabbar-item to="/Mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  setup() {
    const value = ref("");
    const active = ref(0);
    const tab = ref(0);
    const count = ref(0);
    const router = useRouter();
    const loading = ref(false);
    const category = [1,2,3,4,5,6,7,8];
    const gotomine = () => {
      router.push({ name: "Mine" });
    };
    const onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
        count.value++;
      }, 1000);
    };
    return { value, active, tab, count, loading, category, onRefresh, gotomine };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .topbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5%;
    width: 100%;
    .icon {
      display: flex;
      width: 25%;
      flex-grow: 1;
      img {
        height: 80%;
        width: 90%;
      }
    }
    .messagebar {
      display: flex;
      flex-grow: 1;
      img {
        height: 30px;
        width: 30px;
      }
    }
    .searchbar {
      height: 100%;
      flex-grow: 2;
    }
  }
  .tabbar {
    .videolist {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .video {
        height:30vw;
        margin: 1.389vw 0 0 0;
        width: 45%;
        background-color:black;
        // background-image: url(@/assets/logo.png);
        // background-size: 150px 120px;
      }
    }
  }
}
</style>
