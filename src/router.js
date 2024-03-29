import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/dashboard/Index"),
      children: [
        // Dashboard
        {
          name: "Dashboard",
          path: "",
          component: () => import("@/views/dashboard/Dashboard")
        },
        // Pages
        {
          name: "User Profile",
          path: "pages/user",
          component: () => import("@/views/dashboard/pages/UserProfile")
        },
        {
          name: "Timeline",
          path: "pages/timeline",
          component: () => import("@/views/dashboard/pages/Timeline")
        },
        {
          name: "Notifications",
          path: "components/notifications",
          component: () => import("@/views/dashboard/component/Notifications")
        },
        {
          name: "Icons",
          path: "components/icons",
          component: () => import("@/views/dashboard/component/Icons")
        },
        {
          name: "Typography",
          path: "components/typography",
          component: () => import("@/views/dashboard/component/Typography")
        },
        {
          name: "Buttons",
          path: "components/buttons",
          component: () => import("@/views/dashboard/component/Buttons")
        },
        // Tables
        {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: () => import("@/views/dashboard/tables/RegularTables")
        },
        // Maps
        {
          name: "Google Maps",
          path: "maps/google-maps",
          component: () => import("@/views/dashboard/maps/GoogleMaps")
        },
        // Upgrade
        {
          name: "Upgrade",
          path: "upgrade",
          component: () => import("@/views/dashboard/Upgrade")
        }
      ]
    },
    {
      path: "/map",
      name: "Map",
      component: () => import("@/components/Map")
    },
    {
      path: "/ownerPage/:storeName",
      name: "OwnerPage",
      component: () => import("@/components/OwnerPage")
    },
    {
      path: "/ownerMyPage/:storeName",
      name: "OwnerMyPage",
      component: () => import("@/components/OwnerMyPage")
    },
    {
      path: "/demo",
      name: "Demo",
      component: () => import("@/components/Demo")
    }
  ]
});
