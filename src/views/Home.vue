<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/pages/Content/index.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>
