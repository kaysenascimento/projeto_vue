<template>
  <v-app>
    <v-content>
      <Header />
      <Navigation />
      <Content />
    </v-content>
  </v-app>
</template>

<script src="./Header.js" />
<script>
import Content from "./components/pages/Content/index.vue";
import Header from "./components/shared/Header/index.vue";
import Navigation from "./components/shared/Navigation/index.vue";

export default {
  name: "App",

  components: {
    Content,
    Header,
    Navigation
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import "scss/globals.scss";
</style>
