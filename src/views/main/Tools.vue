<template>
  <div class="tools">
    <div>
      <ccard @click.native="openTool()" class="bg-purple">
        <div slot="main">
          重命名工具
        </div>
      </ccard>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require('electron');
import ccard from '@/components/c-card/c-card.vue';
export default {
  name: "Tools",
  components: {ccard},
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