<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="scss">

body,
html {
  height:100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  margin: 0;
}
body{
  height:calc(100% - 10px);
  width:calc(100% - 10px);
  margin: 5px;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: $bg-grey-light;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow:0px 0px 5px rgba(131, 131, 131, 0.466);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*滚动条样式*/
*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  // height: 10px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
  font-weight: 400;
}
h1{
  font-size: 12px;
}
h2{
  font-size: 14px;
}
h3{
  font-size: 16px;
}
h4{
  font-size: 18px;
}
h5{
  font-size: 20px;
}
h6{
  font-size: 22px;
}
.place-block{
  flex-grow: 1;
}
</style>
