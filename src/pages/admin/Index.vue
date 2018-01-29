<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-md-3 col-sm-12">
          <nav class="nav-sidebar">
            <ul class="nav tabs">
              <li class="active">
                <router-link :to="{name: 'Products', params: {}}">Products</router-link>
              </li>
              <li>
                <router-link :to="{name: 'NewAdmin', params: {}}">New Products</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>
