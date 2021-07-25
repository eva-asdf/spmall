<template>
  <div class="goodlist">
      <goods-item v-for='item in good'
      :data='item'
      :key="item"
      class="goods-item"/>
  </div>
</template>

<script>
import GoodsItem from './goodItem';
export default {
    name: 'GoodsList',
    components: {
        GoodsItem
    },
    props: {
        good: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.goodlist .goods-item {
    width: 48%;
    box-sizing: border-box;
    break-inside: avoid;
}

</style>