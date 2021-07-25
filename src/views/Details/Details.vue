<template>
  <div id="details">
    <detail-nbar class="detail-nbar" @toSWhere='toSWhere' ref="nbar" />
    <scroll class="content" ref="scroll" :probeType='3' @scroll='scrollPosition' >
      <detail-item-mes  v-if="itemInfo"
      :itemInfo='itemInfo'
      @DetSwiperload='itemLoad'/>
      <detail-colums :columns='columns' />
      <detail-shop :shopInfo='shopInfo'  v-if="shopInfo"/>
      <detail-des :detailInfo='detailInfo' @desImgLoaded='desImgLoaded' />
      <detail-item-params :ItemParams='itemParams' ref="ItemParams" />
      <detail-rate :rate='rate' v-if="rate" ref="rate"/>
      <div ref="recommend" class="recommend">相关推荐</div>
      <goods-list :good='recommend' />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </scroll>
    <btn-bar class="btn-bar" @addShopCar='addShopCar' />
  </div>
</template>

<script>
import DetailNbar from "./DetailsChildren/detailNavBar";
import DetailItemMes from "./DetailsChildren/DetailItemMse";
import DetailColums from './DetailsChildren/DetailColumns'
import DetailShop from './DetailsChildren/DetailShop'
import DetailDes from './DetailsChildren/DetailDes'
import DetailItemParams from './DetailsChildren/DetailItemParams'
import DetailRate from './DetailsChildren/DetailRate'
import GoodsList from "components/content/good/good";
import Scroll from "components/common/better-scroll/Bscroll";

import BtnBar from './DetailsChildren/btmBar'


import bus from "@/bus";

import { getDetail, Shop, recommend } from "network/details";
import { debounce } from "common/tools";


export default {
  name: "Details",
  components: {
    DetailNbar,
    Scroll,
    DetailItemMes,
    DetailColums,
    DetailShop,
    DetailDes,
    DetailItemParams,
    DetailRate,
    GoodsList,
    BtnBar
  },
  data() {
    return {
      iid: null,
      columns: null,
      itemInfo: null,
      shopInfo: null,
      detailInfo: null,
      itemParams: null,
      rate: null,
      recommend:null,
      toplace: [0],

      refresh: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.itemInfo = res.result.itemInfo
      this.columns = res.result.columns
      this.shopInfo = new Shop(res.result.shopInfo)
      this.detailInfo = res.result.detailInfo
      this.itemParams = res.result.itemParams
      this.rate = res.result.rate
      console.log(res);
    });
    recommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    let refresh1 = debounce(this.$refs.scroll.refresh, 200);
    bus.on("detimgloaded", () => {
      refresh1();
    });
  },
  methods: {
    itemLoad () {
      this.$refs.scroll.refresh()
    },
    desImgLoaded() {
      this.refresh()
      this.toplace[1] = this.$refs.ItemParams.$el.offsetTop;
      this.toplace[2] = this.$refs.rate.$el.offsetTop;
      this.toplace[3] = this.$refs.recommend.offsetTop;
    },
    toSWhere(index) {
      this.$refs.scroll.scrollTo(0, -this.toplace[index])
    },
    scrollPosition(position) {
      if(position.y < 0 && position.y > - this.toplace[1]) {
        this.$refs.nbar.cIndex = 0
      }else if(position.y <= - this.toplace[1] && position.y > - this.toplace[2]) {
        this.$refs.nbar.cIndex = 1
      }else if(position.y <= - this.toplace[2] && position.y > - this.toplace[3]) {
        this.$refs.nbar.cIndex = 2
      }else if(position.y <= - this.toplace[3]) {
        this.$refs.nbar.cIndex = 3
      }
    },
    addShopCar() {
      let product = {
        count: 1
      }
      product.title = this.itemInfo.title
      product.img = this.itemInfo.topImages[0]
      product.desc = this.itemInfo.desc
      product.price = parseInt(this.itemInfo.highNowPrice)
      product.iid = this.iid
      this.$store.commit('addShopCar',product)
    }
  }
};
</script>

<style scoped>
#details {
  position: relative;
  height: 100vh;
  z-index: 999;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow: hidden;
}

.recommend {
  padding: 10px;
  border-top: 1px solid #ccc;
}

.btn-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>