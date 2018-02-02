<template>
  <product-form @save-product="addProduct" :model="model" :manufactures="manufactures"/>

</template>

<script type="text/javascript">
import ProductForm from '@/components/products/ProductForm';

export default {
  data() {
    return {
      model: {},
      manufactures: [
        {
          id: 1,
          name: 'SamSung',
        },
        {
          id: 2,
          name: 'Apple',
        },
        {
          id: 3,
          name: 'Huawei',
        },
        {
          id: 4,
          name: 'Philips',
        },
      ],
    };
  },
  methods: {
    addProduct(model) {
      console.log(model);
    },
  },
  components: {
    'product-form': ProductForm,
  },
};
</script>
