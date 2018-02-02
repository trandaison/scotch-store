import axios from 'axios';
import { API } from '../config';

import {
  ALL_PRODUCTS,
} from './mutation-types';

export const productActions = {
  all({ commit }) {
    axios.get(`${API.base}/products`)
      .then(response => commit(ALL_PRODUCTS, response.data.data));
  },
};

export const manufactureActions = {};
