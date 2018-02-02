import {
  ALL_PRODUCTS,
  PRODUCT_BY_ID,
} from './mutation-types';

export const productMutations = {
  [ALL_PRODUCTS](state, products) {
    state.products = products;
  },
  [PRODUCT_BY_ID](state) {
    return state;
  },
};

export const manufactureGetters = {};
