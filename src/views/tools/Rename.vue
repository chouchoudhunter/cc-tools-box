<template>
  <div class="rename">
    <div class="drop-box">
      <div class="content">拖动文件夹</div>
    </div>
    <el-form>
      <el-form-item label="文件夹地址">
        <el-input type="text">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Rename",
  components: {},
  data() {
    return {};
  },
  methods: {
    startRename() {
      let fs = require("fs"); //想用API中的哪个模块就用require引进来

      let src = "."; //定义一个想修改文件所在的文件夹的路径，相对改js文件

      fs.readdir(src, function (err, files) {
        let i = 1;
        files.forEach(function (filename) {
          //files是该文件夹下所有文件名的数组集合
          if (filename.indexOf(".jpg") != -1) {
            //找出jpg格式的图片
            let oldPath = filename;
            let newPath = i + ".jpg"; //给图片重新命名，利用变量i，顺序递增
            i++;
            fs.rename(oldPath, newPath, function (err) {
              //文件重命名方法，参数代表的意思参考API
              if (!err) {
                //替换成功，提示信息
                console.log(newPath + "替换成功！");
              }
            });
          }
        });
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.rename {
  .drop-box {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    border: 1px rgb(0, 0, 0) solid;
    .content {
    }
  }
}
</style>