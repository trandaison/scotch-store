<template>
  <form v-on:submit.prevent="saveProduct">
    <div class="col-md-5">
      <div class="form-group">
        <label for="product-name">Name</label>
        <input id="product-name" type="text" v-model="model.name"
          v-validate="'required'" name="name"
          :class="{'form-control': true, 'error': errors.has('name')}">
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group">
        <label for="product-price">Price</label>
        <input id="product-price" type="number" v-model="model.price"
          v-validate="'required'" name="price"
          :class="{'form-control': true, 'error': errors.has('price')}">
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label for="product-manufacture">Manufacture</label>
        <select name="manufacture" v-model="model.manufacture" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('manufacture')}">
          <template v-for="manufacture in manufactures">
            <template v-if="manufacture.id == (model.manufacture && model.manufacture.id)">
              <option :value="manufacture.id" :key="manufacture.id" selected>
                {{manufacture.name}}
              </option>
            </template>
            <template v-else>
              <option :value="manufacture.id" :key="manufacture.id">{{manufacture.name}}</option>
            </template>
          </template>
        </select>
        <span class="small text-danger" v-show="errors.has('manufacture')">
          Manufacture is required
        </span>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label for="product-image">Image</label>
        <input type="text" name="image" v-model="model.image" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('image')}" id="product-image">
        <span class="small text-danger" v-show="errors.has('image')">Image is required</span>
      </div>
      <div class="form-group">
        <label for="product-description">Description</label>
        <textarea name="description" rows="5" v-model="model.description" v-validate="'required'"
          :class="{'form-control': true, 'error': errors.has('description')}"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">
          Description is required
        </span>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">
          <i class="fa fa-save"></i>
          <span v-if="isEditing">Save Changes</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script type="text/javascript">
export default {
  props: ['model', 'isEditing', 'manufactures'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model);
    },
  },
};
</script>

<style media="screen">
.form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
