<template>
  <div id="datail-item-mes">
    <swiper class="detail-swiper" v-if="itemInfo">
      <swiper-item v-for="item in itemInfo.topImages" :key="item">
        <img :src="item" @load="imgload" />
      </swiper-item>
    </swiper>
    <h3>{{ itemInfo.title }}</h3>
    <div class="price">
      <strong>￥{{ itemInfo.highNowPrice }}</strong>
      <span class="old-price">￥{{ itemInfo.highPrice }}</span>
      <span
        class="word"
        :style="{ backgroundColor: itemInfo.discountBgColor }"
        v-show="itemInfo.discountDesc"
      >
        {{ itemInfo.discountDesc }}
      </span>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    itemInfo: {
      type: Object,
      defaulft() {
        return {};
      },
    },
  },
  methods: {
    imgload() {
      this.$emit("DetSwiperload");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.detail-swiper {
  height: 380px;
  overflow: hidden;
}

.price strong {
  color: rgb(250, 80, 80);
  font-size: 20px;
}
.price .old-price {
  font-size: 12px;
  color: #aaa;
  text-decoration: line-through;
  margin: 0 8px;
}
.price .word {
  color: #fff;
  border-radius: 12px;
  padding: 3px;

  font-size: 12px;
  height: 20px;
  line-height: 15px;
  position: absolute;
}
</style>