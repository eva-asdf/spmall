<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scoll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullingUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getY() {
      return this.scroll? this.scroll.y : 0
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //probeType
      //0,1是不能实时监测滚动位置
      //2是在滚动过程中监测，手指离开后的惯性滚动不监测
      //3 只要滚动，就监测0
      probeType: this.probeType,
      //click
      //false是不能监听wrapper里面js原生事件
      click: true,
      //pullUpLoad
      //上拉到顶部后触发事件
      pullUpLoad: this.pullUpLoad,
      scrollY: true,
      mouseWheel: true,
    });

    if (this.probeType == 3 || this.probeType == 2) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("SPullingUp");
      });
    }
  },
};
</script>

<style scoped>
</style>