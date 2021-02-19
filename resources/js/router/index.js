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
    component: Customer
},

{
    path: "/menus",
    name: "menu",
    component: Menu,
},

{
    path: "/orders",
    name: "order",
    component: Order,
    meta: {
        requiresAuth: true
    }
}


];

const router = new VueRouter({
    mode: "history",
    routes
});


export default router;
