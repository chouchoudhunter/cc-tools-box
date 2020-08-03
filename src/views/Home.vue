<template>
  <div class="home">
    <div class="home-container">
      <div height="50px" class="home-header">
        <div class="logo">
          <img src="@/assets/logo.png" />
        </div>
        <div class="title">
          <font-awesome-icon :icon="['fas', 'stream']"></font-awesome-icon>
          <div class="text">
            <h3>CC-ToolsBox</h3>
            <h1>可以慢但是不能停</h1>
          </div>
        </div>
        <div class="place-block"></div>
        <div class="right">
          <font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon>
        </div>
      </div>
      <div class="home-content">
        <div class="home-aside">
          <div class="menu">
            <div class="user-card" :class="{'user-card-active':activeBtn['dashboard']}" @click="goPage('dashboard')">
              <div class="text">丑丑</div>
            </div>
            <div class="item" :class="{'active':activeBtn['tools']}" @click="goPage('tools')">
                <font-awesome-icon :icon="['fas', 'toolbox']"></font-awesome-icon>
            </div>
            <div class="item" :class="{'active':activeBtn[2]}">
              <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
            </div>
            <div class="place-block" style="-webkit-app-region: drag;"></div>
            <div class="item">
              <font-awesome-icon :icon="['fas', 'cogs']"></font-awesome-icon>
            </div>
          </div>
        </div>
        <div class="home-main">
          <router-view></router-view>
          <div class="quick-box">
            <div class="content">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      anim: false,
      activeBtn:[{
        'dashboard':true,
        'tools':false,
      }],
      activeMenu:'dashboard',
    };
  },
  methods: {
    playAnim() {
      this.anim = !this.anim;
      console.log(this.anim);
    },
    goPage(url){
      this.activeBtn[this.activeMenu]=false;
      this.activeMenu=url;
      switch(url){
        case 'dashboard':this.activeBtn[url]=true;break;
        case 'tools':this.activeBtn[url]=true;break;
      }
      this.$router.push(url);
    }
  },
  mounted() {
    this.anim = true;
  }
};
</script>
<style lang="scss">
$menu-width: 120px;
$menu-user-width: $menu-width - 40px;
$menu-item-width: 35px;
.home {
  height: 100%;
  .home-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .home-header {
      height: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      -webkit-app-region: drag;
      .logo {
        width: $menu-width;
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          display: block;
          height: 30px;
        }
      }
      .title{
        display: flex;
        flex-direction: row;
        line-height: 20px;
        .text{
          margin-left: 15px;
          h3{
            font-weight: bold;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: row;
        line-height: 20px;
        padding: 0 40px;
      }
    }
    .home-content {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      .home-aside {
        height: 100%;
        .menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: $menu-width;
          height: 100%;
          .user-card {
            width: $menu-user-width;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            border-radius: 7px;
            overflow: hidden;
            font-size: 14px;
          }
          .user-card-active{
            background-color: $purple-light;
          }
          .item {
            color: $grey;
            width: $menu-item-width;
            height: $menu-item-width;
            line-height: $menu-item-width;
            text-align: center;
            border-radius: 50%;
            margin: 10px 0;
            font-size: 14px;
            flex-grow: 0;
          }
          .active {
            background-color: $purple-light;
            color: $purple;
          }
        }
      }
      .home-main {
        flex-grow: 1;
        position: relative;
        .quick-box{
          width: 100%;
          height: 60px;
          left: 0;
          position: absolute;
          bottom: -10px;
          .content{
            width: 90%;
            margin: 0 auto;
            height: 100%;
            border-radius: 10px;
            background-color: #eff2f9;
          }
        }
      }
    }
  }
}
</style>