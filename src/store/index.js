import { createStore } from 'vuex'

export default createStore({
  state: {
    shopCar: [],
    cartPrice: 0
  },
  mutations: {
    addShopCar(state,data) {
      let flag = false;
      if(state.shopCar.length) {
        flag = state.shopCar.some((value) => {
        if (value.iid == data.iid) {
          value.count++
          return true
        }
      })
      }
      
      !flag && state.shopCar.push(data)
    },
    changePrice(state,price) {
      state.cartPrice = price
    }
  },
  actions: {
  },
  modules: {
  }
})
