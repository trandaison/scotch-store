<template>
  <div>
    <div class="title">
      <h1>Admin New Product</h1>
    </div>
    <input type="text" placeholder="Name" v-model="name"
      v-validate="'required'" name="name"
      :class="{'form-control': true, 'error': errors.has('name')}" />
    <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      name: 'default',
    };
  },
};
</script>

<style media="screen">
.form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
