<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
    },
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {
    swiperload() {
      if(this.flag){
        this.$emit("swiperload");
        this.flag = false
      }
      
    },
  },
};
</script>

<style scoped>
.slide img {
  width: 100%;
}
</style>