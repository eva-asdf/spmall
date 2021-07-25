<template>
  <ul class="btm-bar" ref="btnbar">
    <li>
      <div style="--i:2.1"></div>
      <p>客服</p>
    </li>
    <li>
      <div style="--i:4"></div>
      <p>店铺</p>
    </li>
    <li @click="collet">
      <div style="--i:0" :class="{active: flag}"></div>
      <p>收藏</p>
    </li>
    <li class="shop-car" @click="shopCar">加入购物车</li>
    <li class="buy">购买</li>
  </ul>
</template>

<script>
import { tips } from '@/common/tools.js'
export default {
  name: "BtnBar",
	data() {
		return {
			flag: false
		}
	},
	methods: {
		collet() {
			this.flag = !this.flag
			this.$emit('collet',this.flag);
		},
		shopCar () {
			this.$emit('addShopCar')
      tips('加入购物车成功',this.$refs.btnbar)

		}
	}
};
</script>

<style scoped>
.btm-bar {
  display: flex;
  height: 50px;
}

.btm-bar li {
  height: 100%;
  text-align: center;
	padding-top: 2px;
	box-sizing: border-box;
}

.btm-bar li div {
  background: url("~assets/img/detail/detail_bottom.png");
  width: 25px;
  height: 25px;
  margin: 0 auto;
	background-size: 25px;
	background-position: 0 calc(var(--i)*-28px) ;
}

.active {
	background-position: 0 -30px !important;
}

.btm-bar li:nth-of-type(-n + 3) {
  flex: 2;
}
.btm-bar li:nth-of-type(n + 4) {
  flex: 3;
  line-height: 50px;
}

.shop-car {
  background-color: #ffe817;
  color: #4e4942;
}

.buy {
  background-color: #f69;
  color: #fff;
}
</style>