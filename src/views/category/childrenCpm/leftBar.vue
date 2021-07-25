<template>
  <ul class="left-bar">
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: index == cindex }"
      @click="itemclick(index)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "LeftBar",
  props: {
    list: {
      type: Array,
      defaulft() {
        return [];
      },
    },
  },
  data() {
    return {
      cindex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.cindex = index;
      this.$emit("leftBarClick", index);
    },
  },
	mounted() {
		this.$emit('leftBar')
	}
};
</script>

<style scoped>
ul {
  width: 100px;
  background-color: rgb(233 233 233);
}
ul > li {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  box-sizing: border-box;
}

.active {
  background-color: white;
  color: var(--color-tint);
  border-left: 5px solid var(--color-tint);
}
</style>