<template>
  <div class="tools">
    <div @click="openTool()">dakai rename</div>
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