import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      currentProduct: {},
      cart: [],
    };
  },
  mutations: {
    storeCurrentProduct(state, data) {
      state.currentProduct = data;
    },
    storeCart(state, data) {
      state.cart.push(data);
    },
    storeRemoveCart(state, data) {
      const indice = state.cart.indexOf(data);
      state.cart.splice(indice, 1);
    },
    storeCleanCart(state) {
      state.cart = [];
    },
  },
});
