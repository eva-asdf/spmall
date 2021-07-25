<template>
  <div class="sub-category">
		<div v-for="(item,index) in subCategory" :key="index">
			<img :src="item.image" alt="" @load="imgloaded">
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: "SubCategory",
  props: {
    subCategory: {
      type: Array,
      defaulft() {
        return [];
      },
    },
  },
	methods: {
		imgloaded() {
			this.$emit('busimgload')
		}
	}
};
</script>

<style scoped>
.sub-category {
	display: flex;
	flex-wrap: wrap;
	width: 275px;
}

.sub-category > div {
	width: 33%;
}

.sub-category > div img {
	width: 100%;
}

.sub-category > div p {
	width: 100%;
	text-align: center;
}
</style>