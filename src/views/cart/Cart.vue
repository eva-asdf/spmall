<template>
  <div id="cart">
    <nab-bar class="cart-nbar">
      <template #center> 购物车({{ $store.state.shopCar.length }}) </template>
    </nab-bar>
    <scroll class="scroll"> 
      <content ref="content" />
    </scroll>
    <adds class="adds" />
  </div>
</template>

<script>
import NabBar from "components/common/navbar/NavBar";
import Scroll from "components/common/better-scroll/Bscroll";
import Content from './childrenComponents/CartContent'
import Adds from './childrenComponents/AddBar'

export default {
  name: "Cart",
  components: {
    NabBar,
    Scroll,
    Content,
    Adds
  },

};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}

.cart-nbar {
  background-color: var(--color-tint);
  color: #fff;
}

.scroll {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 100px;

  overflow: hidden;
}

.adds {
  position: fixed;
  bottom: 50px;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding-left: 20px;
}
</style>
