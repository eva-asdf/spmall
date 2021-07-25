<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  line-height: 44px;
  height: 44px;

	box-shadow: 1px 1px 8px 1px #eedcdc;
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
  text-align: center;
	
}
</style>