<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
      
  }
};
</script>

<style scoped>
.back-top {
  z-index: 99;
  position: fixed;
  right: 10px;
  bottom: 60px;
  width: 44px;
}
.back-top img {
    width: 90%;
}
</style>

