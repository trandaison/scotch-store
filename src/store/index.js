import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters, manufactureGetters } from './getters';
import { productMutations } from './mutations';
import { productActions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufactures: [],
  },
  getters: Object.assign({}, productGetters, manufactureGetters),
  mutations: Object.assign({}, productMutations),
  actions: Object.assign({}, productActions),
});
