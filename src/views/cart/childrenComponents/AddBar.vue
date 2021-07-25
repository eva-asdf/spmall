<template>
  <div class="add">
    <img
      src="~assets/img/cart/tick.svg"
      @click="tick"
      :class="{ active: flag }"
      class="img"
    />
    合计 ￥{{ $store.state.cartPrice }}
    <div class="float_right bg">去结算</div>
  </div>
</template>

<script>
export default {
  name: "Add",
  data () {
    return {
      data: [],
      flag: false
    }
  },
  methods: {
    tick() {
      this.flag = !this.flag;
      if(this.flag) {
        this.$parent.$refs.content.alltick()
      }else {
         this.$parent.$refs.content.allCancletick()
      }
    },
  },
  computed: {
    getPrice() {
      let price = 0;
      if (this.data.length) {
        this.data.foreEach((value, index) => {
          if (this.flag[index]) {
            price += value.price * value.count;
          }
          return price;
        });
      }
    },
  },
};
</script>

<style scoped>
.add {
  height: 50px;
  line-height: 42px;
}

img {
  border-radius: 50%;
  border: 1px solid #aaa;
}

.bg {
  background-color: red;
  height: 100%;
  width: 100px;
  text-align: center;
  line-height: 42px;
  color: #fff;
}

.active {
  background-color: var(--color-tint);
}
</style>