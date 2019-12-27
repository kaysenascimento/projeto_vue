<template>
  <v-app>
    <Header />
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script src="./Header.js" />
<script>
import Home from "./components/pages/Home/index.vue";
import Header from "./components/shared/Header/index.vue";

export default {
  name: "App",

  components: {
    Home,
    Header
  },

  data: () => ({
    //
  })
};
</script>
