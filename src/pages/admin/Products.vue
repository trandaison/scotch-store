<template>
  <div class="col-md-9">
    <div class="title">
      <h1>Products</h1>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Manufacturer</td>
          <td colspan="2">Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.manufacturer.name }}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['all']),
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
  mounted() {
    this.all();
  },
};
</script>
