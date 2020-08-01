<template>
  <div class="rename">
    <div class="drop-box" id="drop-box">
      <div class="content">拖动文件或文件夹</div>
    </div>
    <el-form>
      <el-form-item label="文件夹地址">
        <el-input type="text"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <ctransfer></ctransfer>
    </div>
  </div>
</template>

<script>
const fs=window.require('fs');
// import fs from "fs";
import ctransfer from '../../components/c-transfer/c-transfer';
export default {
  name: "Rename",
  components: {ctransfer},
  data() {
    return {
      files:[{
        name:'',
        type:'',
        folder:''
      }],
    };
  },
  methods: {
    startRename() {
      let src = "."; //定义一个想修改文件所在的文件夹的路径，相对改js文件
      FileSystem.readdir(src, function(err, files) {
        let i = 1;
        files.forEach(function(filename) {
          //files是该文件夹下所有文件名的数组集合
          if (filename.indexOf(".jpg") != -1) {
            //找出jpg格式的图片
            let oldPath = filename;
            let newPath = i + ".jpg"; //给图片重新命名，利用变量i，顺序递增
            i++;
            FileSystem.rename(oldPath, newPath, function(err) {
              //文件重命名方法，参数代表的意思参考API
              if (!err) {
                //替换成功，提示信息
                console.log(newPath + "替换成功！");
              }
            });
          }
        });
      });
    }
  },
  mounted() {
    let receiveDropDom = document.getElementById("drop-box");
    receiveDropDom.addEventListener("drop", e => {
      let files = e.dataTransfer.files;
      //判断是不是一个文件
      if (files.length==1) {
        let matchReg=/(?<=[.].*)(?!.*[.]).*/;//获取文件类型
        let fileType=files[0].name.match(matchReg);
        matchReg=/^.*(?=\\)/;//获取父级绝对路径
        let fileParentFolder=files[0].path.match(matchReg)[0];
        let isDirectory=fs.statSync(files[0].path).isDirectory();
        if(isDirectory){//文件夹作为根文件夹，读取所有子文件
          files=fs.readdirSync(files[0].path);
        }else{
          
        }
      }else{
        
      }
    });
    receiveDropDom.addEventListener("dragover", e => {
      e.preventDefault();
    });
  }
};
</script>
<style lang="scss">
.rename {
  .drop-box {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    border: 3px rgb(0, 0, 0) dashed;
    height: 100px;
    text-align: center;
    .content {
    }
  }
}
</style>