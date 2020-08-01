<template>
  <div class="home">
    <el-container class="home-container">
      <el-aside width="auto" class="home-aside" :class="{'animate__animated animate__bounce':anim}">
        <el-menu default-active="1-4-1" class="menu-content" :collapse="true" :router="true">
          <el-menu-item index="dashboard">
            <i class="el-icon-house"></i>
            <div slot="title">555</div>
          </el-menu-item>
          <el-menu-item index="tools">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <div class="menu-bottom"></div>
          <el-menu-item index="setting">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="20px">
          <!-- Header content -->
        </el-header>
        <el-main height>
          <!-- Main content -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      anim: false
    };
  },
  methods: {
    playAnim() {
      this.anim = !this.anim;
      console.log(this.anim);
    }
  },
  mounted() {
    this.anim = true;
  }
};
</script>
<style lang="scss">
.home {
  height: 100%;
}
.home-container {
  height: 100%;
  .home-aside {
    height: 100%;
    .menu-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      .menu-bottom {
        -webkit-app-region: drag;
        flex-grow: 1;
      }
    }
  }
  .el-header,
  .el-footer {
    height: 10px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>