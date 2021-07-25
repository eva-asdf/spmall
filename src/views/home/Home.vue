<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      :data="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
      class="tab-fixed"
      ref="topControl"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentscroll"
      @SPullingUp="showMoreCon"
    >
      <main-swiper
        v-if="banner.length"
        :banners="banner"
        @swiperload="swiperload"
      />
      <main-recommend v-if="recommends.length" :recommend="recommends" />
      <feature-view />
      <tab-control
        :data="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :good="getGoods" />
    </scroll>
    <back-top @click.enter="totopclik" v-show="isShowToTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/good";
import Scroll from "components/common/better-scroll/Bscroll";
import BackTop from "components/content/backtop/backTop";
import bus from "@/bus";

import { getHomeMultdata, getHomeGoods } from "network/home";
import { debounce } from "common/tools";

import MainSwiper from "./childrenComps/homeSwiper";
import MainRecommend from "./childrenComps/homeRecommend";
import FeatureView from "./childrenComps/homeFeatures";

export default {
  name: "Home",
  components: {
    NavBar,
    MainSwiper,
    MainRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommends: [],

      tabOffset: 0,
      saveY: 0,

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      busFn: null,

      goodsTag: "pop",

      scroll: null,

      isShowToTop: false,
      showScroll: false,
      isTabFixed: false,

      
    };
  },
  created() {
    console.log("home create");
    this.getHomeMultdata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.busFn = () => {
      refresh();
    }
    bus.on("imgloaded",this.busFn);
  },
  destroyed() {},
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();
    bus.off('imgloaded',this.busFn)
  },
  computed: {
    getGoods() {
      return this.goods[this.goodsTag].list;
    },
    getShowScroll() {
      return this.goods.pop.page && this.goods.new.page && this.goods.sell.page;
    },
  },
  methods: {
    /**
     *  网络请求相关
     */
    getHomeMultdata() {
      getHomeMultdata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;

        this.$refs.scroll && this.$refs.scroll.finishPullingUp();
      });
    },

    /**
     *  事件监听相关
     */
    tabClick(index) {
      let arr = ["pop", "new", "sell"];
      this.goodsTag = arr[index];
      this.$refs.topControl.cindex = index;
      this.$refs.tabControl.cindex = index;
    },
    totopclik() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentscroll(position) {
      this.isShowToTop = -position.y > 1000;
      this.isTabFixed = -position.y >= this.tabOffset;
    },
    showMoreCon() {
      this.getHomeGoods(this.goodsTag);
    },
    swiperload() {
      this.tabOffset = this.$refs.tabControl.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  z-index: 99;
}

.tab-fixed {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  z-index: 999;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 45px;
  left: 0;
  right: 0;
}


</style>
