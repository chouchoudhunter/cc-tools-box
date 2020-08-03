<template>
  <div class="dashboard">
      <div class="main-circle">

      </div>
  </div>
</template>

<script>
import ccard from '@/components/c-card/c-card.vue';
export default {
  name: "Dashboard",
  components: {ccard},
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="scss">
$mian-circle-width:400px;
.dashboard{
  height: 100%;
  position: relative;
  .main-circle{
    background-color: #f5c8e5;
    width: $mian-circle-width;
    height: $mian-circle-width;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -$mian-circle-width / 2;
    margin-top: -$mian-circle-width / 2;
  }
}
</style>