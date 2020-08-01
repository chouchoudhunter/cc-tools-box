<template>
  <div class="c-transfer">
    <div class="left">
      <div class="header">
        <div class="title">
          <h3>重命名的文件</h3>
          <h1>根目录</h1>
        </div>
        <div class="place-block"></div>
        <div class="number">总文件数：128</div>
      </div>
      <div class="content">
        <div class="item">
            <el-checkbox></el-checkbox>
            <div class="icon">
              <font-awesome-icon :icon="['far','file-alt']"/>
            </div>
            <div class="name">logo.psd</div>
            <div class="place-block"></div>
            <div class="function">
              <font-awesome-icon :icon="['fas','trash-alt']"/>
            </div>
        </div>
      </div>
      <div class="footer">
      </div>
    </div>
    <div class="center">
      <div class="icon">
        <font-awesome-icon :icon="['fas','arrow-right']"/>
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fas','arrow-left']"/>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <div class="title">
          <h3>排除的文件</h3>
          <h1>根目录</h1>
        </div>
        <div class="place-block"></div>
        <div class="number">总文件数：128</div>
      </div>
            <div class="content">
        <div class="item">
            <el-checkbox></el-checkbox>
            <div class="icon">
              <font-awesome-icon :icon="['far','file-alt']"/>
            </div>
            <div class="name">logo.psd</div>
            <div class="place-block"></div>
            <div class="function">
              <font-awesome-icon :icon="['fas','trash-alt']"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ctransfer",
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss">
.c-transfer {
  display: flex;
  flex-direction: row;
  .left,.right{
    flex-grow: 3.5;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
  }
  .center {
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon{
      background-color: #ffffff;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
    }
  }
  .header {
    display: flex;
    flex-direction: row;
    background-color: #cecece;
    padding: 10px 15px;
    .title {
      text-align: left;
    }
    .block {
      flex-grow: 1;
    }
    .number{
      text-align: right;
    }
  }
  .content{
    .item{
      padding: 5px 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon{
        margin: 0 7px;
      }
    }
  }
}
</style>