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
                <div
                  v-for="(item, index) in category"
                  :key="index"
                  class="videobox"
                >
                  <div class="video">
                    <div class="comment">
                      <span>播放{{ item.number }}</span>
                      <span>评论{{ item.commentnum }}</span>
                    </div>
                  </div>
                  <div class="videoinfo">{{ item.videoinfo }}</div>
                </div>
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
            <div class="videolist">
              <div
                v-for="(item, index) in category"
                :key="index"
                class="videobox"
              >
                <div class="video"></div>
                <div class="videoinfo">{{ item.videoinfo }}</div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="番剧">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <div class="videolist">
              <div
                v-for="(item, index) in category"
                :key="index"
                class="videobox"
              >
                <div class="video"></div>
                <div class="videoinfo">{{ item.videoinfo }}</div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="原创">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <div class="videolist">
              <div
                v-for="(item, index) in category"
                :key="index"
                class="videobox"
              >
                <div class="video"></div>
                <div class="videoinfo">{{ item.videoinfo }}</div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="音乐">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <div class="videolist">
              <div
                v-for="(item, index) in category"
                :key="index"
                class="videobox"
              >
                <div class="video"></div>
                <div class="videoinfo">{{ item.videoinfo }}</div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="舞蹈">
          <van-pull-refresh
            style="min-height: 100vh"
            v-model="loading"
            @refresh="onRefresh"
          >
            <div class="videolist">
              <div
                v-for="(item, index) in category"
                :key="index"
                class="videobox"
              >
                <div class="video">
                  <div class="comment"></div>
                </div>
                <div class="videoinfo">{{ item.videoinfo }}</div>
              </div>
            </div>
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
import { reactive, ref } from "vue";
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
    const category = reactive([
      {
        id: 1,
        number: "1万",
        commentnum: "14",
        videoinfo: "无语拉！鸣人惨遭削弱",
      },
      {
        id: 2,
        number: "10万",
        commentnum: "150",
        videoinfo: "哇！圣斗士来了",
      },
      {
        id: 3,
        number: "100万",
        commentnum: "1670",
        videoinfo: "哇！圣斗士来了",
      },
      {
        id: 4,
        number: "19万",
        commentnum: "110",
        videoinfo: "哇！圣斗士来了",
      },
      {
        id: 5,
        number: "15万",
        commentnum: "110",
        videoinfo: "哇！圣斗士来了",
      },
      {
        id: 6,
        number: "113万",
        commentnum: "110",
        videoinfo: "哇！圣斗士来了",
      },
      {
        id: 7,
        number: "133万",
        commentnum: "1150",
        videoinfo: "哇！圣斗士来了",
      },
      {
        id: 8,
        number: "121万",
        commentnum: "1",
        videoinfo: "哇！圣斗士来了",
      },
    ]);
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
    return {
      value,
      active,
      tab,
      count,
      loading,
      category,
      onRefresh,
      gotomine,
    };
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
      .videobox {
        height: 40vw;
        width: 45%;
        // border: solid red 1px;
        padding: 1.5vw 2vw;
        // background-image: url(@/assets/logo.png);
        // background-size: 150px 120px;
        .video {
          position: relative;
          height: 80%;
          width: 100%;
          background-color: black;
          .comment {
            display: flex;
            position: absolute;
            justify-content: space-between;
            height: 20%;
            width: 100%;
            margin-top: 25.6vw;
            color: grey;
          }
        }
        .videoinfo {
          height: 20%;
          width: 100%;
          font-size: 3.59vw;
        }
      }
    }
  }
}
</style>
