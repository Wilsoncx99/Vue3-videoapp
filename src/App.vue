<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
  color: #2c3e50;
  @media only screen and (max-width: 500px) {
    --van-nav-bar-title-font-size: 18px;
    --van-nav-bar-arrow-size: 25px;
  }

  --van-nav-bar-title-font-size: 22px;
  --van-nav-bar-text-color: #2c3e50;
  --van-nav-bar-arrow-size: 40px;
  --van-nav-bar-icon-color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}
</style>
