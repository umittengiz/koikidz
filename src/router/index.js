import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUpView.vue"),
  },
  {
    path: "/signup/mother",
    name: "signup-mother",
    component: () =>
      import(
        /* webpackChunkName: "signup-mother" */ "../views/SignUpMotherView.vue"
      ),
  },
  {
    path: "/signup/kids/add",
    name: "signup-kids-add",
    component: () =>
      import(
        /* webpackChunkName: "signup-kids-add" */ "../views/SignUpKidsAddView.vue"
      ),
  },
  {
    path: "/signup/questions",
    name: "signup-questions",
    component: () =>
      import(
        /* webpackChunkName: "signup-questions" */ "../views/SignUpQuestionsView.vue"
      ),
  },
  {
    path: "/babysitters",
    name: "babysitters",
    component: () =>
      import(
        /* webpackChunkName: "babysitters" */ "../views/BabySittersView.vue"
      ),
  },
  {
    path: "/babysitters/view",
    name: "babysitter",
    component: () =>
      import(
        /* webpackChunkName: "babysitter" */ "../views/BabySitterView.vue"
      ),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(
        /* webpackChunkName: "checkout" */ "../views/CheckoutPaymentView.vue"
      ),
  },
  {
    path: "/checkout/success",
    name: "checkout-success",
    component: () =>
      import(
        /* webpackChunkName: "checkout-success" */ "../views/CheckoutSuccessView.vue"
      ),
  },
  {
    path: "/sister",
    name: "sister",
    component: () =>
      import(/* webpackChunkName: "sister" */ "../views/HomeSisterView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
