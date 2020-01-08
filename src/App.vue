<template>
  <v-app>
    <v-content>
      <Header />

      <main>
        <NavMenu />
        <!-- <BreadCrumbs /> -->
        <router-view />
      </main>
    </v-content>
  </v-app>
</template>

<script src="./Header.js" />
<script>
// import Content from "./components/pages/Content/index.vue";
import Header from "./components/shared/Header/index.vue";
import NavMenu from "./components/shared/NavMenu/index.vue";
import BreadCrumbs from "./components/shared/BreadCrumbs/index.vue";

export default {
  name: "App",

  components: {
    Header,
    NavMenu,
    BreadCrumbs
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import "scss/globals.scss";
</style>
