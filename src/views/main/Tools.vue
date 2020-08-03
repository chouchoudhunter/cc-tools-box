<template>
  <div class="tools">
    <div @click="openTool()">打开重命名工具</div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require('electron')
export default {
  name: "Tools",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    openTool(){
      ipcRenderer.send('createSubWindow','rename');
    }
  },
  mounted() {
  }
};
</script>
<style lang="scss">

</style>