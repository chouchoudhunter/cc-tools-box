<template>
  <div class="home">
    <el-container class="home-container">
      <el-aside width="auto" class="home-aside" :class="{'animate__animated animate__bounce':anim}">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="true"
          style="height:100%"
        >
          <el-submenu index="1">
            <template slot="title">
              <el-image src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-image>
            </template>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4" style="align-self:end">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height>
          <!-- Header content -->
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-header>
        <el-main height>
          <!-- Main content -->
          dd
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
  }
}

//////////////////////////
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>