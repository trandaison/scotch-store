import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import IndexAdmin from '@/pages/admin/Index';
import NewAdmin from '@/pages/admin/New';
import EditAdmin from '@/pages/admin/Edit';
import Products from '@/pages/admin/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: IndexAdmin,
      children: [
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'new',
          name: 'NewAdmin',
          component: NewAdmin,
        },
        {
          path: 'edit/:id',
          name: 'EditAdmin',
          component: EditAdmin,
        },
      ],
    },
  ],
});
