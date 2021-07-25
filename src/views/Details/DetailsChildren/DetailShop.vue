<template>
  <div class="detail-shop">
    <div class="services">
      <div v-for="item in shopInfo.services" :key="item.icon" v-show="item.icon">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="shop-mes">
      <div class="shop-name">
        <img :src="shopInfo.logo" alt="" class="shop-logo" />
        <strong>{{shopInfo.name}}</strong>
      </div>
      <div class="num">
        <div class="left">
					<div>
						<p>{{shopInfo.sells}}</p>
						总销量
					</div>
					<div>
						<p>{{shopInfo.goodsCount}}</p>
						全部宝贝
					</div>
				</div>
        <div class="right">
					<p v-for="item in shopInfo.score" :key="item">
						<span>{{item.name}}</span>
						<span class="score" :class="{active:item.isBetter}">{{item.score}}</span>
						<span class="high" v-if="item.isBetter">高</span>
						<span class="low" v-else>低</span>
					</p>
				</div>
      </div>
    </div>
		<a class="enter-shop" :href="shopInfo.shopUrl">
			进店逛逛
		</a>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.services {
  height: 50px;
  line-height: 50px;
	display: flex;
	justify-content: space-around;

	border-bottom: 3px solid #d5d5d5;
}

.services > div {
	font-size: 12px;
}

.services > div img {
	width: 15px;
}
.shop-name {
	margin-top: 15px;
}
.shop-logo {
	width: 45px;
	border-radius: 50%;
	margin: 0 10px 0 15px;
}

.num {
	width: 100%;
	margin-top: 15px;
	display: flex;
}

.num > div {
	flex: 1;
}

.left {
	border-right: 1px solid #bbb;
}

.left::after {
	content: '';
	display: block;
	clear: both;
}

.left > div {
	width: 50%;
	height: 100%;
	margin-top: 16px;

	float: left;
	text-align: center;

	font-size: 16px;
	/* font-weight: bold; */
}

.right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

}

.right > p {
	margin: 3px 0;
	width: 100%;

	padding-left: 30px;
}

.right .score {
	width: 40px;
	margin: 0 5px;
	display: inline-block;
	color: green;
}

.active {
	color: red !important;
}

.high {
	color: #fff;
	background-color: red;
	border-radius: 3px;
}

.low {
	color: #fff;
	background-color: green;
	border-radius: 3px;
}

.enter-shop {
	display: block;
	margin: 10px auto;
	width: 150px;
	height: 25px;
	line-height: 25px;
	text-align: center;
	background-color: rgb(188 188 188 / 44%);
	border-radius: 25px;

	color: #444;
}
</style>