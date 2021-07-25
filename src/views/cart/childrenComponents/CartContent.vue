<template>
  <div class="content">
    <div class="item" v-for="(item, index) in data" :key="index">
      <div class="left">
        <img
          src="~assets/img/cart/tick.svg"
          @click="tick(index)"
          :class="{ active: flag[index] }"
        />
      </div>
      <img :src="item.img" alt="" class="img" />
      <div class="con">
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.desc }}</p>
        <div class="price clearfix">
          <span class="unit-price">￥{{ item.price }}</span>
          <span class="float_right">X{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartContent",
  data() {
    return {
      flag: [],
      data: this.$store.state.shopCar,
    };
  },
  methods: {
    tick(index) {
      this.flag[index] = !this.flag[index];
      this.getPrice();
    },
    getPrice() {
      let price = 0;
      if (this.data.length) {
        for (let index = 0; index < this.data.length; index++) {
          if (this.flag[index]) {
            price += this.data[index].price * this.data[index].count;
          }
          this.$store.commit("changePrice", price);
        }
      }
    },
    alltick() {
      this.flag.forEach((value,index) => {
        value= true;
        this.flag[index] = true
      });
      this.getPrice();
    },
    allCancletick() {
      this.flag.forEach((value,index) => {
        value = false;
        this.flag[index] = false
      });
      this.getPrice();
    },
  },
  beforeMount() {
    let len = this.$store.state.shopCar.length;

    for (let i = 0; i < len; i++) {
      this.flag.push(false);
    }
  },
};
</script>

<style scoped>
.item {
  box-sizing: border-box;
  padding: 5px;
  height: 110px;
  display: flex;
  width: 100%;

  justify-content: space-between;
}

.left {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  border-radius: 50%;
  border: 1px solid #aaa;
}

.active {
  background-color: var(--color-tint);
}

.img {
  border-radius: 5px;
}

.con {
  width: 66%;
  /* flex: 1; */
}

.title,
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin: 15px 0;
}

.title {
  font-weight: bold;
  color: black;
  font-size: 15px;
  margin-top: 0;
}

.desc {
  color: #666;
  font-size: 13px;
}

.unit-price {
  color: var(--color-tint);
}
</style>