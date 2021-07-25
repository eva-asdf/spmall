<template>
  <div class="goods-item" @click="itemclick">
    <img :src="data.show.img" alt="" @load="imgload" />
    <p>{{ data.title }}</p>
    <div>
      <span class="price">{{ data.price }} </span>
      <span class="collet">收藏 {{ data.cfav }}</span>
    </div>
  </div>
</template>

<script>
import bus from "@/bus";

export default {
  name: "GoodsItem",
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    imgload() {
      bus.emit("imgloaded");
    },
    itemclick() {
      console.log('跳转');
      this.$router.push('/details/'+this.data.iid)
    }
  },
};
</script>

<style scoped>
.goods-item {
  display: block;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-item div {
  font-size: 12px;
  text-align: center;
}

.goods-item p {
  font-size: 12px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.goods-item .price {
  color: rgb(255, 48, 82);
  margin-right: 10px;
}
</style>