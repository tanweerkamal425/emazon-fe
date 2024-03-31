import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/auth/LoginPage.vue'
import DashboardPage from '@/pages/home/DashboardPage.vue'

import ProductIndexPage from '@/pages/product/ProductIndexPage.vue'
import ProductCreatePage from '../pages/product/ProductCreatePage.vue'
import ProductShowPage from '../pages/product/ProductShowPage.vue'
import ProductEditPage from '../pages/product/ProductEditPage.vue'

import CategoryIndexPage from '../pages/category/CategoryIndexPage.vue'
import CategoryShowPage from '../pages/category/CategoryShowPage.vue'
import CategoryCreatePage from '../pages/category/CategoryCreatePage.vue'
import CategoryEditPage from '../pages/category/CategoryEditPage.vue'

import SizeIndexPage from '../pages/size/SizeIndexPage.vue'
import SizeShowPage from '../pages/size/SizeShowPage.vue'
import SizeCreatePage from '../pages/size/SizeCreatePage.vue'
import SizeEditPage from '../pages/size/SizeEditPage.vue'

import ColorIndexPage from '../pages/color/ColorIndexPage.vue'
import ColorCreatePage from '../pages/color/ColorCreatePage.vue'
import ColorShowPage from '../pages/color/ColorShowPage.vue'
import ColorEditPage from '../pages/color/ColorEditPage.vue'

import ProductImageIndexPage from '../pages/product_image/ProductImageIndexPage.vue'
import ProductImageCreatePage from '../pages/product_image/ProductImageCreatePage.vue'
import ProductImageShowPage from '../pages/product_image/ProductImageShowPage.vue'
import ProductImageEditPage from '../pages/product_image/ProductImageEditPage.vue'

import OrderIndexPage from '../pages/order/OrderIndexPage.vue'
import OrderCreatePage from '../pages/order/OrderCreatePage.vue'
import OrderShowPage from '../pages/order/OrderShowPage.vue'
import OrderEditPage from '../pages/order/OrderEditPage.vue'

import PaymentIndexPage from '../pages/payment/PaymentIndexPage.vue'
import PaymentShowPage from '../pages/payment/PaymentShowPage.vue'

import CouponIndexPage from '../pages/coupon/CouponIndexPage.vue'
import CouponCreatePage from '../pages/coupon/CouponCreatePage.vue'
import CouponShowPage from '../pages/coupon/CouponShowPage.vue'
import CouponEditPage from '../pages/coupon/CouponEditPage.vue'

import UserIndexPage from '../pages/user/UserIndexPage.vue'
import UserShowPage from '../pages/user/UserShowPage.vue'
import UserEditPage from '../pages/user/UserEditPage.vue'

import DemoPage from '../pages/DemoPage.vue'

import { useAuthStore } from '../stores/AuthStore'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: null },
    { path: '/auth/login', name: 'auth.login', component: LoginPage },
    { path: '/admin',children: [
        { path: 'dashboard', name: 'home.dashboard', component: DashboardPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'products', name: 'product.index', component: ProductIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'products/store', name: 'product.store', component: ProductCreatePage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'products/:id', name: 'product.show', component: ProductShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'products/:id/edit', name: 'product.edit', component: ProductEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'products/:id/delete', name: 'product.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'category', name: 'category.index', component: CategoryIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'category/store', name: 'category.store', component: CategoryCreatePage, meta: { requiresAuth: true, isAdmin: true }},
        { path: 'category/:id', name: 'category.show', component: CategoryShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'category/:id/edit', name: 'category.edit', component: CategoryEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'category/:id/delete', name: 'category.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'size', name: 'size.index', component: SizeIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'size/store', name: 'size.store', component: SizeCreatePage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'size/:id', name: 'size.show', component: SizeShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'size/:id/edit', name: 'size.edit', component: SizeEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'size/:id/delete', name: 'size.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'color', name: 'color.index', component: ColorIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'color/store', name: 'color.store', component: ColorCreatePage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'color/:id', name: 'color.show', component: ColorShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'color/:id/edit', name: 'color.edit', component: ColorEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'color/:id/delete', name: 'color.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'product-image', name: 'product_image.index', component: ProductImageIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'product-image/:id/store', name: 'product_image.store', component: ProductImageCreatePage, props: true, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'product-image/:id', name: 'product_image.show', component: ProductImageShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'product-image/:id/edit', name: 'product_image.edit', component: ProductImageEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'product-image/:id/delete', name: 'product_image.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'order', name: 'order.index', component: OrderIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'order/store', name: 'order.store', component: OrderCreatePage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'order/:id', name: 'order.show', component: OrderShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'order/:id/edit', name: 'order.edit', component: OrderEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'order/:id/delete', name: 'order.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'payment', name: 'payment.index', component: PaymentIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'payment/:id', name: 'payment.show', component: PaymentShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'coupon', name: 'coupon.index', component: CouponIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'coupon/store', name: 'coupon.store', component: CouponCreatePage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'coupon/:id', name: 'coupon.show', component: CouponShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'coupon/:id/edit', name: 'coupon.edit', component: CouponEditPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'coupon/:id/delete', name: 'coupon.delete' },
        
        { path: 'user', name: 'user.index', component: UserIndexPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'user/:id', name: 'user.show', component: UserShowPage, meta: { requiresAuth: true, isAdmin: true } },
        { path: 'user/:id/delete', name: 'user.delete', meta: { requiresAuth: true, isAdmin: true } },

        { path: 'demo', name: 'demo', component: DemoPage }

      ],
    },
  ]
})

router.beforeEach(async (to, from) => {
  const auth = useAuthStore();
  if (to.name === 'home' && ! auth.isAuthenticated()) {
    return { name: "auth.login" };
  }

  if ((to.name === 'auth.login' || to.name === 'home') && auth.isAuthenticated()) {
    return { name: "home.dashboard" };
  }

  if (to.meta.requiresAuth && auth.isAuthenticated()) {
    return true;

  // If `to` route does not requires to be authenticated then let the user go there.
  } else if (!to.meta.requiresAuth) {
    return true;
  }

  return { name: 'auth.login' };
});

export default router
