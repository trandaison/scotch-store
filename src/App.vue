<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><router-link :to="{name: 'Home', params: {}}">Home</router-link></li>
          <li><router-link :to="{name: 'Admin', params: {}}">Admin</router-link></li>
          <li><router-link :to="{name: 'Cart', params: {}}">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.navbar {
  border-radius: 0 !important;
}
</style>
