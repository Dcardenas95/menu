import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const Menu = () => import("../views/Menus.vue");
const Customer = () => import("../views/Customers.vue");
const Order = () => import("../views/Orders.vue");

Vue.use(VueRouter);

const routes = [
{
    path: "/",
    name: "home",
    component: Home,
    meta: {
        requiresAuth:true,
    }
},

{
    path: "/customers",
    name: "customer",
    component: AuthView
},

{
    path: "/menus",
    name: "menus",
    component: UserProfileView,
    meta: {
        requiresAuth: true
    }
},

{
    path: "/orders",
    name: "order",
    component: UserProfileView,
    meta: {
        requiresAuth: true
    }
}


];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});


export default router;
