<template>
  <div id="category">
    <nav-bar class="category-nav">
      <template #center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <scroll class="left-scroll" ref="scroll1">
        <left-bar
          :list="list"
          @leftBarClick="leftBarClick"
          @leftBar="leftBarLoad"
        />
      </scroll>
      <scroll class="right-scroll" ref="scroll2">
        <sub-category :subCategory="subCategory" @busimgload="busimgload" />
        <tab-control
          :data="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl"
        />
        <good :good="categorysDetail[tabType]" class="good" />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/better-scroll/Bscroll";
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import good from "@/components/content/good/good";

import leftBar from "@/views/category/childrenCpm/leftBar";
import subCategory from "@/views/category/childrenCpm/subCategory";

import { debounce } from "common/tools";

import bus from "@/bus";
import {
  getCategory,
  getSubcategory,
  getSubategoryData,
  goods,
} from "network/category.js";

export default {
  name: "Category",
  components: {
    Scroll,
    leftBar,
    NavBar,
    subCategory,
    TabControl,
    good,
  },
  data() {
    return {
      list: [],
      categorysDetail: {
        pop: [],
        new: [],
        sell: [],
      },
      subCategory: [],
      cindex: 0, //类型
      refresh1: null,
      refresh2: null,
      tabType: "pop",

      busFn: null,
    };
  },
  methods: {
    leftBarClick(index) {
      this.cindex = index;
      this.$refs.tabControl.cindex = 0;
      this.tabType = "pop";
      this.getSubcategory();
      this.getSubategoryData("pop");
      this.getSubategoryData("sell");
      this.getSubategoryData("new");
    },
    getSubcategory() {
      getSubcategory(this.list[this.cindex].maitKey).then((res) => {
        this.subCategory = res.data.list;
      });
    },
    getSubategoryData(type) {
      getSubategoryData(this.list[this.cindex].miniWallkey, type).then(
        (res) => {
          this.categorysDetail[type].splice(0);
          res.forEach((value) => {
            this.categorysDetail[type].push(new goods(value));
          });
        }
      );
    },
    busimgload() {
      this.refresh1();
      this.refresh2();
    },
    leftBarLoad() {
      this.$refs.scroll1.refresh();
      console.log("----");
    },
    tabClick(index) {
      let arr = ["pop", "new", "sell"];
      this.tabType = arr[index];
    },
  },
  created() {
    getCategory().then((res) => {
      this.list = res.data.category.list;
      console.log(this.list);
      this.getSubcategory();
      this.getSubategoryData("pop");
      this.getSubategoryData("sell");
      this.getSubategoryData("new");
    });
  },
  mounted() {
    this.refresh1 = debounce(this.$refs.scroll1.refresh, 200);
    this.refresh2 = debounce(this.$refs.scroll2.refresh, 200);
    let refresh = debounce(this.$refs.scroll2.refresh, 200);
    this.busFn = () => {
      refresh();
    };
    bus.on("imgloaded", this.busFn);
  },
  activated() {
    this.$refs.scroll2.refresh();
    this.$refs.scroll2.refresh();
  },
  deactivated() {
    bus.off("imgloaded", this.busFn);
  },
};
</script>

<style>
#category {
  height: 100vh;
}

.category-nav {
  background-color: var(--color-tint);
  color: #fff;

  z-index: 99;
}

.left-scroll,
.right-scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}

.right-scroll {
  width: 275px;
}

.content {
  display: flex;
  height: 100%;
}

.good {
  width: 100%;
}
</style>