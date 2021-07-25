<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <template #center>
        <div>
          超级商场
        </div>
      </template>
    </nav-bar>
    <profile-main/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import profileMain from './chiildCom/content'
  export default {
    name: "Profile",
    components: {
      NavBar,
      profileMain
    }
  }
</script>

<style scoped>
  .profile-nav {
  background-color: var(--color-tint);
  color: #fff;

  z-index: 99;
}
</style>
