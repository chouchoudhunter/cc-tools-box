<template>
  <div class="c-card" :style="{'height':height,'width':width}">
    <div class="content">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ccard",
  components: {},
  props: {
    height: {
      type: String,
      default: "140px"
    },
    width: {
      type: String,
      default: "250px"
    }
  }
};
</script>
<style lang="scss">
.c-card {
        border-radius: 15px;
    .content {
        padding: 15px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>