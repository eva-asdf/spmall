<template>
  <div id="App">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Details">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/reset.css";
</style>
