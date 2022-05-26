<template>
  <div class="wrapper">
    <div class="topbar">
      <div class="icon">
        <img @click="gotomine()" src="@/assets/myicon.svg" />
      </div>
      <div class="searchbar">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="messagebar">
        <img src="@/assets/mail.svg" />
      </div>
    </div>
    <div class="tabbar">
      <van-tabs v-model:active="tab">
        <van-tab title="直播">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <p style="min-height: 100vh">视频内容</p>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="视频">
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
    <van-tabbar-item icon="search">动态</van-tabbar-item>
    <van-tabbar-item icon="friends-o">会员购</van-tabbar-item>
    <van-tabbar-item to="/Mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  setup() {
    const value = ref("");
    const active = ref(0);
    const tab = ref(0);
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
        count.value++;
      }, 1000);
    };
    return { value, active, tab, count, loading, onRefresh };
  },
  data() {
    return {
      username: "",
      password: "",
      videolist: [
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
        {
          id: "1",
        },
      ],
    };
  },
  methods: {
    gotomine() {
      this.$router.push({
        name: "Mine",
      });
    },
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
    height: 5%;
    img {
      height: 2rem;
      width: 2rem;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    .messagebar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    .searchbar {
      flex-grow: 1;
    }
  }
  .tabbar {
    .videolist {
      background: rgb(243, 171, 171);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: space-between;
      .video {
        background: black;
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>
