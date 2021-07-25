<template>
  <div class="detali-nav-bar">
    <nav-bar>
      <template #left>
        <img src="~assets/img/common/back.svg" alt=""  @click="backClick" />
      </template>
      <template #center>
        <span
          v-for="(item, index) in title"
          :key="index"
          class="item"
          :class="{ active: cIndex == index }"
          @click="itemClik(index)"
          >{{ item }}</span
        >
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],

      cIndex: 0,
    };
  },
  methods: {
    itemClik(index) {
      this.$emit('toSWhere',index)
			this.cIndex = index
		},
		backClick() {
			this.$router.back()
		}
  },
};
</script>

<style scoped>
.item {
  margin: 0 12px;
}
.active {
	color: rgb(252, 60, 92);
}

img {
	width: 35%;
	margin-left: 10px;
}
</style>